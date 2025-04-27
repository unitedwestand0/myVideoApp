import express from 'express';
import { signUpUser } from '../controller/auth/authController';
const router = express.Router();

router.post('/sign-up', signUpUser);

export default router;