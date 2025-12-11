import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router: Router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

router.post('/login', (req, res): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password required' });
    return;
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

  res.json({ token, user: { username } });
});

router.post('/register', (req, res): void => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password required' });
    return;
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '7d' });

  res.status(201).json({ token, user: { username } });
});

export { router as authRouter };
