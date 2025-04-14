import express from 'express';
import userRoute from './routes/users.js'
import { connectDB } from './database/db.js';
import 'dotenv/config'

const app = express();

connectDB(app);

app.use('/api/v1/users', userRoute);

app.get('/', (req, res) => {
    res.json({ message: 'Hello from chat app' });
})