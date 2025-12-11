import { Router } from 'express';
import { getDb } from '../db';

const router = Router();

router.get('/messages', (req, res) => {
  const db = getDb();
  const messages = db.prepare('SELECT * FROM messages ORDER BY created_at DESC LIMIT 50').all();
  res.json({ messages });
});

router.post('/messages', (req, res) => {
  const { content, userId } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  const db = getDb();
  const result = db.prepare('INSERT INTO messages (user_id, content) VALUES (?, ?)').run(
    userId || 1,
    content
  );

  res.status(201).json({
    id: result.lastInsertRowid,
    content,
    userId: userId || 1,
  });
});

export { router as chatRouter };
