import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  userId: String,
  foods: [{ foodId: String, quantity: Number }],
  date: Date
});

export default mongoose.model('Meal', mealSchema);
