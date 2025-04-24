import express from 'express';
import { getMyProfileController, loginUserController, logoutUserController, newUserController, searchUserController } from '../controllers/user.controller.js';
import { singleAvatar } from '../middlewares/multer.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', singleAvatar, newUserController);

router.post('/login', loginUserController);

router.use(isAuthenticated);

router.get('/get-profile', getMyProfileController);

router.get('/logout', logoutUserController);

router.get('/search', searchUserController);

export default router;