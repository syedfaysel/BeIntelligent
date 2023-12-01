import express from 'express';
import { addReview, editReview, deleteReview, getReviewsByBookId, getReviewsByUsername, likeReview } from '../controllers/reviewController.js';

const router = express.Router();
 
router.post('/add-review', addReview);

router.put('/edit-review', editReview);

router.delete('/delete-review', deleteReview);

router.get('/get-book-reviews/:bookId', getReviewsByBookId);

router.get('/get-user-reviews/:username', getReviewsByUsername);

router.post('/like-review/:reviewId', likeReview);


export default router;