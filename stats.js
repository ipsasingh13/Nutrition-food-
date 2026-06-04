import Food from '../models/Food.js';

export const stats = async (req,res)=>{
 const data = await Food.find();
 res.json(data);
};
