import express from "express";
import { getUserController, getUserDetails } from "../controllers/userController.js";



// router object ..//
const router = express.Router();


//routes ....mostly crud
router.get('/:username', getUserDetails)



export default router;