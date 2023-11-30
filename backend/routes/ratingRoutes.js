import express from 'express';
import { addRating } from '../controllers/ratingController.js';

const router = express.Router();
 
router.post('/add-rating', addRating);


export default router;
