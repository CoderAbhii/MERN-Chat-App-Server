import express from 'express';
import userRoute from './routes/users.route.js'
import { connectDB } from './database/db.js';
import 'dotenv/config'
import { errorMiddleware } from './middlewares/error.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

connectDB(app);

app.use('/api/v1/users', userRoute);

app.get('/', (req, res) => {
    res.json({ message: 'Hello from chat app' });
});

app.use(errorMiddleware);