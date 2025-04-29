import express from "express";
const app = express();
import connectDB from "./config/db";
connectDB();
import dotenv from 'dotenv';
dotenv.config();
import router from "./route/index";
import passportJwtStrategy from './config/passportJwtStrategy';

// middleware
app.use(passportJwtStrategy.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);


//server 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`listening and running on port ${PORT}`); 
})