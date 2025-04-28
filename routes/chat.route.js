import express from 'express';
import { addMembersController, getMyChatsController, getMyGroupsController, leaveGroupController, newGroupChatController, removeMembersController } from '../controllers/chat.controller.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.use(isAuthenticated);

router.post('/new', newGroupChatController);

router.get('/my', getMyChatsController);

router.get('/my/groups', getMyGroupsController);

router.put('/add-members', addMembersController);

router.put('/remove-members', removeMembersController);

router.delete('/leave/:id', leaveGroupController);

// Send Attachments

// Get Messages

// Get Chat Details, rename, delete

export default router;