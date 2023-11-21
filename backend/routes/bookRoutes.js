import express from 'express';

import {createBook,updateBook,deleteBook,getBooks} from '../controllers/bookController.js';

const router = express.Router();

// Post a new book
router.post('/createBook', createBook);

// Update a book
router.patch('/updateBook/:id', updateBook);

// Delete a book
router.delete('/deleteBook/:id', deleteBook);

// Get all books
router.get('/getBooks', getBooks);

export default router;
