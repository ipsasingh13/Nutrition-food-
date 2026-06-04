import Food from '../models/Food.js';

export const getStats = async (req, res) => {
  const foods = await Food.find();

  res.json(foods.map(f => ({
    name: f.name,
    calories: f.calories
  })));
};
