import express from "express";
import { getUserController, getUserDetails, updateUser } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";



// router object ..//
const router = express.Router();


//routes ....mostly crud
router.get('/:username', getUserDetails)
router.put('/:username', authMiddleware, updateUser)



export default router;