import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  protein: Number,
  carbs: Number,
  fats: Number
}, { timestamps: true });

export default mongoose.model('Food', foodSchema);