import express from 'express';
import { getChallenge , addTargetBooks, updateTargetBooks, deleteChallenge, addCompletedBooks} from '../controllers/challengeController.js';

const router = express.Router();

router.get('/get-challenge', getChallenge);

router.post('/add-target-books', addTargetBooks);

router.patch('/update-target-books', updateTargetBooks);

router.delete('/delete-challenge', deleteChallenge);

router.patch('/add-comp-book', addCompletedBooks)


export default router;
