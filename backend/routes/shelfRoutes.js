import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createShelfByUsername, deleteShelf, addBookToShelf, getShelves, removeBookFromShelf } from "../controllers/shelfController.js";


// router object ..//
const router = express.Router();


//routes ....mostly crud
router.get('/:username/shelves', getShelves)
router.patch('/:username/create-shelf', authMiddleware, createShelfByUsername)
router.delete('/:username/delete-shelf/:shelfName', authMiddleware, deleteShelf)
router.patch('/:username/shelves/:shelfName/add', authMiddleware, addBookToShelf)
router.patch('/:username/shelves/:shelfName/remove/:bookId', authMiddleware, removeBookFromShelf)


export default router;