import express from 'express';
import { stats } from '../controllers/stats.js';

const r = express.Router();
r.get('/',stats);

export default r;
