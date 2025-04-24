import express from 'express';
import { connectDB } from './database/db.js';
import 'dotenv/config'
import { errorMiddleware } from './middlewares/error.js';
import cookieParser from 'cookie-parser';


import userRoute from './routes/users.route.js';
import chatRoute from './routes/chat.route.js';
import { createUser } from './seeders/user.seed.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

connectDB(app);

// createUser(10);

app.use('/api/v1/user', userRoute);
app.use('/api/v1/chat', chatRoute);

app.get('/', (req, res) => {
    res.json({ message: 'Hello from chat app' });
});

app.use(errorMiddleware);