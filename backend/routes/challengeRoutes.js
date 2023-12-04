import express from 'express';
import { getChallenge } from '../controllers/challengeController.js';

const router = express.Router();

router.get('/get-challenge', getChallenge);

export default router;
