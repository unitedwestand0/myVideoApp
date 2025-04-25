import express from "express";
import {
  sendEmailForResetPassword,
  signInUser,
  signUpUser,
  updatePassword,
} from "../controller/auth/authController";
const router = express.Router();

router.post("/sign-up", signUpUser);
router.post("/sign-in", signInUser);
router.post("/reset-password", sendEmailForResetPassword);
router.post("/update-password/:token", updatePassword);

export default router;
