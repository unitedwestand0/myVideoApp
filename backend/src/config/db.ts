import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDB = async () => {
     await mongoose
         .connect(process.env.DATABASE as string)
         .then(() => console.log("DB Connected"))
         .catch((err) => console.error("Database Mongoose Connection Error", err));
    };

export default connectDB;

