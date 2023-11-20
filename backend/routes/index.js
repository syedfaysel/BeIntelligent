import express from "express";

import testRoutes from "./testRoutes.js";

const router = express.Router();

const path = "/api/v1/";

router.use(`${path}test`, testRoutes); //api/v1/test/test-get

export default router;
