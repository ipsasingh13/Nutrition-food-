import mongoose from 'mongoose';

const schema = new mongoose.Schema({
 name: String,
 calories: Number,
 protein: Number,
 carbs: Number,
 fats: Number
});

export default mongoose.model('Food', schema);
