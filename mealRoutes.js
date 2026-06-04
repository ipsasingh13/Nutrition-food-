import express from 'express';
import Meal from '../models/Meal.js';

const router = express.Router();

router.post('/', async (req, res) => {
  res.json(await Meal.create(req.body));
});

router.get('/:userId', async (req, res) => {
  res.json(await Meal.find({ userId: req.params.userId }));
});

export default router;
