import express from "express";
import { getUserController } from "../controllers/userController.js";



// router object ..//
const router = express.Router();


//routes ....mostly crud
router.get('/:username', getUserController)



export default router;