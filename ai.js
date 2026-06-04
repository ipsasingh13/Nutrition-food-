import express from 'express';
import { ai } from '../controllers/ai.js';

const r = express.Router();
r.post('/recommend',ai);

export default r;
