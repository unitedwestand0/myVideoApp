import mongoose, {Document, Model} from "mongoose";

export interface IUser extends Document {
    name?:string;
    email:string;
    password:string;
    token?:string;
    downloadCount:number;
    uploadCount:number;
    createdAt:Date;
    updatedAt:Date;
}

const {Schema} = mongoose;

const userSchema = new Schema ({
    name: {
        type: String, 
        trim: true,
        // required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64,
    },
    token: {
        type: String,
    },
    uploadCount: {
        type: Number,
        default: 0,
    },
    downloadCount: {
        type: Number,
        default: 0,
    }
}, {timestamps: true} // tracks created and updated content by the time
);

const User : Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;