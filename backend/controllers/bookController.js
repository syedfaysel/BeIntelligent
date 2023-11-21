import Book from '../models/bookModel.js';
import mongoose from 'mongoose';

// Create a new book
const createBook = async (req, res) => {
    const newBookData = req.body;
    try {
        const newBook = await Book.create(newBookData);
        res.status(201).json({
            success: true,
            message: 'New Book created successfully',
            book: newBook
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a book
const updateBook = async (req, res) => {
    const {id} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, error: 'Invalid Book ID' });
        }
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBook) {
            return res.status(404).json({ success: false, error: 'No such book' });
        }
        res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            book: updatedBook
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a book
const deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, error: 'Invalid Book ID' });
        }
        const deletedBook = await Book.findOneAndDelete({ _id: id });

        if (!deletedBook) {
            return res.status(404).json({ success: false, error: 'No such book' });
        }
        res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            book: deletedBook
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


//Get Books 
const getBooks = async (req, res) => {
    try {
        const { search, filter, sort, pages, limit } = req.query;
        const queryObject = {};

        //Search based on Book Title or Author
        if (search) {
            queryObject.$or = [
                { title: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } },
            ];
        }

        //Filter based on Book Genre
        if (filter) {
            queryObject.genres = { $in: filter.split(',') };
        }
        const sortOptions = {};
        
        //Sorting
        if (!sort) {
            sortOptions.avgRating = -1;
        }else{
            if (sort === "Newest") {
                sortOptions.createdAt = -1;
            } else if (sort === "Oldest") {
                sortOptions.createdAt = 1;
            } else if (sort === "A-Z") {
                sortOptions.title = 1;
            } else if (sort === "Z-A") {
                sortOptions.title = -1;
            } else if (sort === 'asc') {
                sortOptions.avgRating = 1;
            } else if (sort === 'desc') {
                sortOptions.avgRating = -1;
            }
        }

        //Pagination
        const pageNumber = Number(pages) || 1; //Default pageNumber 1
        const pageSize = Number(limit) || 5; //Default pageLimit 5
        const skip = (pageNumber - 1) * pageSize;
        
        const showBooks = await Book.find(queryObject).sort(sortOptions).skip(skip).limit(pageSize).select('title author image description genres avgRating');

        res.status(200).json({
            success: true,
            message: 'Books are shown',
            book: showBooks});

    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};

export {
    createBook,
    updateBook,
    deleteBook,
    getBooks,
};


