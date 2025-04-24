import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { newGroupChatController } from '../controllers/chat.controller.js';

const router = express.Router();

router.use(isAuthenticated);

router.post('/new', newGroupChatController);

export default router;