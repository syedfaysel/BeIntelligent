import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import testRoutes from "./testRoutes.js";
import authRoutes from "./authRoutes.js";
import gbookRoutes from './gbookRoutes.js';

import bookRoutes from "./bookRoutes.js"

const router = express.Router();

const path = "/api/v1/";

router.use(`${path}test`, authMiddleware, testRoutes); //api/v1/test/test-get
router.use(`${path}auth`, authRoutes);
router.use(`${path}gbooks`, gbookRoutes);

router.use(`${path}books`, bookRoutes);

export default router;
