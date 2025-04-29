import dotenv from 'dotenv';
dotenv.config();

import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import User from '../model/userSchema';

const options : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET_KEY as string,
};

passport.use(new JWTStrategy(options, async(jwtPayload,done) => {
    try {
        const user = await User.findById(jwtPayload._id).select("-password");
        if(!user) {
            return done(null, false);
        }
        return done(null,user);
    } catch (error) {
        console.error(`Error in JWT Authentication ${error}`);
        return done(error);
    }
}));

export default passport;