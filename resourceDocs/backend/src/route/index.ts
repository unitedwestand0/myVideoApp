import express from "express";
const router = express.Router();
import authRoute from "./authRoute";
import userRoute from "./userRoute";
import awsRoute from "./awsFileRoute";
import passport from "passport";
import {
  downloadVideo,
  fetchSingleVideo,
  fetchVideos,
} from "../controller/aws/awsFileController";

//downlaod rout
router.get("/fetch-videos", fetchVideos);
router.get("/fetch-single/video/:id", fetchSingleVideo);
router.get("/download/file/:id", downloadVideo);
router.use("/auth", authRoute);
router.use(
  "/user",
  passport.authenticate("jwt", { session: false }),
  userRoute
);
router.use("/aws", passport.authenticate("jwt", { session: false }), awsRoute);

export default router;
