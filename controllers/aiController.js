export const getRecommendation = async (req, res) => {
  try {
    const { goal } = req.body;
    if (!goal) {
      return res.status(400).json({ message: 'Please provide a health goal' });
    }
    let recommendation = 'Balanced diet recommended';
    if (goal.toLowerCase() === 'weight loss') {
      recommendation = 'Eat low carb, high protein foods. Focus on vegetables, lean meats, and whole grains.';
    } else if (goal.toLowerCase() === 'muscle gain') {
      recommendation = 'Eat high protein foods like chicken, paneer, eggs, and legumes. Include carbs for energy.';
    } else if (goal.toLowerCase() === 'maintenance') {
      recommendation = 'Maintain balanced macronutrients: 40% carbs, 30% protein, 30% fats.';
    }
    res.json({ recommendation });
  } catch (err) {
    res.status(500).json({ message: 'Error getting recommendation', error: err.message });
  }
};