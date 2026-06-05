import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  foods: [{
    foodId: String,
    quantity: Number
  }],
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('Meal', mealSchema);