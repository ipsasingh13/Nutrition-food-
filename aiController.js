export const getRecommendation = async (req, res) => {
  const { goal } = req.body;

  let result = 'Balanced diet recommended';

  if (goal === 'weight loss') result = 'Eat low carb, high protein foods';
  if (goal === 'muscle gain') result = 'Eat high protein foods like chicken, paneer';

  res.json({ recommendation: result });
};
