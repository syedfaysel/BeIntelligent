import express from 'express';
import { addRating, editRating, deleteRating} from '../controllers/ratingController.js';

const router = express.Router();
 
router.post('/add-rating', addRating);

router.put('/edit-rating', editRating);

router.delete('/delete-rating', deleteRating)


export default router;
