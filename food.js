import express from 'express';
import Food from '../models/Food.js';

const r = express.Router();

r.get('/',async(req,res)=>res.json(await Food.find()));
r.post('/',async(req,res)=>res.json(await Food.create(req.body)));

export default r;
