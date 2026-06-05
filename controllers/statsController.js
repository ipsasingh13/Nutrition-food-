import Food from '../models/Food.js';

export const getStats = async (req, res) => {
  try {
    const foods = await Food.find();
    const stats = foods.map(f => ({
      name: f.name,
      calories: f.calories,
      protein: f.protein || 0,
      carbs: f.carbs || 0,
      fats: f.fats || 0
    }));
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stats', error: err.message });
  }
};