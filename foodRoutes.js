import express from 'express';
import Food from '../models/Food.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await Food.find());
});

router.post('/', async (req, res) => {
  res.json(await Food.create(req.body));
});

export default router;
