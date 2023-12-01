import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createShelfByUsername, deleteShelf, addBookToShelf, getShelves } from "../controllers/shelfController.js";


// router object ..//
const router = express.Router();


//routes ....mostly crud
router.get('/:username/shelves', getShelves)
router.post('/:username/shelves/new', authMiddleware, createShelfByUsername)
router.post('/:username/shelves/delete/:shelfName', authMiddleware, deleteShelf)
router.post('/:username/shelves/:shelfName/add', authMiddleware, addBookToShelf)


export default router;