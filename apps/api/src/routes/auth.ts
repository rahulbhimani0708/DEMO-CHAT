import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

  res.json({ token, user: { username } });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

  res.status(201).json({ token, user: { username } });
});

export { router as authRouter };
