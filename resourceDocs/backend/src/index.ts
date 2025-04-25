import express from "express";
const app = express();
import cors from "cors";
import connectDb from "./config/db";
import dotenv from "dotenv";
import routes from "./route/index";
import passportJwtStrategy from "./config/passportJwtStrategy";
dotenv.config();
connectDb();

// cors optiosn
const corsOptions = {
  origin: ["http://localhost:5173", "https://my-video-hub.vercel.app"],
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(passportJwtStrategy.initialize());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);
app.listen(port, () => {
  console.log(`server running on the port ${port}`);
});
