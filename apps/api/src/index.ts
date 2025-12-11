import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './db';
import { authRouter } from './routes/auth';
import { chatRouter } from './routes/chat';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

initDatabase();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api' });
});

app.use('/api/auth', authRouter);
app.use('/api/chat', chatRouter);

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
