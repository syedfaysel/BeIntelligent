import express from "express";
import { createShelfByUsername, deleteShelf, addBookToShelf } from "../controllers/shelfController.js";


// router object ..//
const router = express.Router();


//routes ....mostly crud
router.post('/:username/shelves/new', createShelfByUsername)
router.post('/:username/shelves/delete/:shelfName', deleteShelf)
router.post('/:username/shelves/:shelfName/add', addBookToShelf)


export default router;