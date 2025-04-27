import {Request, RequestHandler} from "express";
import User from "../../model/userSchema";
import { sendRes } from "../../utilities/sendResponse";

interface RegisterReq extends Request{
    body: {
        email:string;
        password: string;
    };
}



export const signUpUser: RequestHandler = async(req: RegisterReq, res) => {
    
    try{
        const {email, password} = req.body;
        // changing in another part of code 
        // because of updating password portion 
        // if (!name || name.length < 2) {
        //     return sendRes(res, 400, false, "Name Required");
        // } 

        const existingUser = await User.findOne({email});

        if(existingUser) {
            return sendRes(res,400,false,"Account already in use with this email");
        } 
           
            const newUser = await User.create({
                email,
                password,
            });
            
            // send successful user created response
            if(!existingUser && newUser){
            return sendRes(res,200,true, "User Created Successfully");
            }

    } catch (err) {
            console.error(`Error in signing up the user ${err}`);
            // send failure response
            return sendRes(res,500,false, "Internal Server Error");
    }
};