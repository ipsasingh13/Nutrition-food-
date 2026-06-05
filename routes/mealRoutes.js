import express from 'express';
import Meal from '../models/Meal.js';

const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.status(201).json(meal);
  } catch (err) {
    res.status(500).json({ message: 'Error creating meal', error: err.message });
  }
});
router.get('/:userId', async (req, res) => {
  try {
    const meals = await Meal.find({ userId: req.params.userId });
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching meals', error: err.message });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(meal);
  } catch (err) {
    res.status(500).json({ message: 'Error updating meal', error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting meal', error: err.message });
  }
});
export default router;