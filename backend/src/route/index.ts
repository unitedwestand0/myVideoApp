import express from 'express';
const router = express.Router();
import authRoute from './authRoute';

router.use('/auth', authRoute);

export default router;