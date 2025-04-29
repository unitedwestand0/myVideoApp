import {Request, RequestHandler} from "express";
import User from "../../model/userSchema";
import { sendRes } from "../../utilities/sendResponse";
import crypto from 'crypto';
import { hashPassword, compareHashedPassword } from "../../utilities/passwordHelper";
import { generateJwtToken } from "../../utilities/generateJwtToken";

interface RegisterReq extends Request{
    body: {
        email: string;
        password: string;
    };
}



export const signUpUser: RequestHandler = async(req: RegisterReq, res) => {
    
    try{
        const {email, password} = req.body;

        // changing in another part of code because of updating password
        // if (!name || name.length < 2) {
        //     return sendRes(res, 400, false, "Name Required");
        // } 

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return sendRes(res,400,false,"Account already in use with this email");
        } 
           const hashedPassword = await hashPassword(password);

            await User.create({
                email,
                password: hashedPassword,
                token: crypto.randomBytes(16).toString('hex'),

            });
            
            if(!existingUser){
            return sendRes(res,200,true, "User Created Successfully");
            }

    } catch (err) {
            console.error(`Error in signing up the user ${err}`);
            // send failure response
            return sendRes(res,500,false, "Internal Server Error");
    }
};

export const signInUser: RequestHandler = async(req: RegisterReq, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return sendRes(res, 404, false, 'No User Found, Please Register');
        }

        const matchPassword = await compareHashedPassword(password,user.password);
        if(!matchPassword) {
            return sendRes(res, 400, false, 'Passwords Do Not Match');
        }
        const jwtToken = await generateJwtToken(user);
        if(user) {
            return sendRes(res, 200, true, 'Logged in successfully', {user: jwtToken});
        }

    } catch (error) {
        console.error(`Error in sign in authentication ${error}`);
        return sendRes(res,500,false,'Internal Server Error');
    }
};

