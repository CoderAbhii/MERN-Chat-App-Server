import express from 'express';
import { loginUserController, newUserController } from '../controllers/user.controller.js';
import { singleAvatar } from '../middlewares/multer.js';

const router = express.Router();

router.post('/register', singleAvatar, newUserController);

router.post('/login', loginUserController);

export default router;