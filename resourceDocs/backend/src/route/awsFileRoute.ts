import express from "express";
import { upload } from "../middleware/multers3Midleware";
import {
  deleteGivenVideo,
  fetchSingleVideo,
  fetchVideosForLoggedInUser,
  updateVideo,
  uploadFile,
} from "../controller/aws/awsFileController";
const router = express.Router();

router.post("/upload-file", upload, uploadFile);
router.get("/fetch-videos", fetchVideosForLoggedInUser);
router.delete("/delete-single/video/:id", deleteGivenVideo);
router.put("/update-video/:id", upload, updateVideo);

export default router;
