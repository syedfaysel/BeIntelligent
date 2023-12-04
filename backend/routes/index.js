import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import testRoutes from "./testRoutes.js";
import authRoutes from "./authRoutes.js";
import gbookRoutes from './gbookRoutes.js';

import bookRoutes from "./bookRoutes.js"
import userRoutes from "./userRoutes.js"
import shelfRoutes from "./shelfRoutes.js"
import reviewRoutes from "./reviewRoutes.js";
import challengeRoutes from "./challengeRoutes.js"


const router = express.Router();

const path = "/api/v1/";

router.use(`${path}test`, authMiddleware, testRoutes); //api/v1/test/test-get
router.use(`${path}auth`, authRoutes);
router.use(`${path}gbooks`, gbookRoutes);
router.use(`${path}user`, userRoutes);

router.use(`${path}user`, shelfRoutes);
router.use(`${path}books`, bookRoutes);
router.use(`${path}reviews`, authMiddleware, reviewRoutes);
router.use(`${path}challenges`, authMiddleware, challengeRoutes)



export default router;
