import express from 'express';
import { addRating, editRating } from '../controllers/ratingController.js';

const router = express.Router();
 
router.post('/add-rating', addRating);

router.put('/edit-rating', editRating);


export default router;
