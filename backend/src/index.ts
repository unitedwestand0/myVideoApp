import express from "express";
const app = express();
 import connectDB from "./config/db";
 connectDB();
 import dotenv from 'dotenv';
 dotenv.config();


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening and running on port ${PORT}`); 
})