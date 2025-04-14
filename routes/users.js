import express from 'express';
import { Login, NewUser } from '../controllers/user.js';

const app = express.Router();

app.post('/register', NewUser);
app.post('/login', Login);

export default app;