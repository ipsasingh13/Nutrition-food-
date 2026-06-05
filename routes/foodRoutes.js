import express from 'express';
import Food from '../models/Food.js';

const router = express.Router();
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching foods', error: err.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ message: 'Error creating food', error: err.message });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ message: 'Food not found' });
    res.json(food);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching food', error: err.message });
  }
});
export default router;