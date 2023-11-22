import express from "express";

import testRoutes from "./testRoutes.js";

import bookRoutes from "./bookRoutes.js"

const router = express.Router();

const path = "/api/v1/";

router.use(`${path}test`, testRoutes); //api/v1/test/test-get

router.use(`${path}books`, bookRoutes);

export default router;
