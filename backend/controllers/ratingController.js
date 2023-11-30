// rating controller
import BookModel from '../models/bookModel.js';
const { Book ,createNewBook, updateBookById, deleteBookById, getAllBooks, getBookById } = BookModel;
import Rating from '../models/ratingModel.js';

//Add Rating
const addRating = async (req, res) => {
  try {
    const { bookId, rating } = req.body;

    //Checking User Input
    if (!bookId || !rating || typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input for bookId or rating. Rating must be an integer and between 1 and 5.',
      });
    }

    //Book exists or not
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    //User has already rated a book or not
    const userRating = book.ratings.find((r) => r.user === req.username);

    if (userRating) {
      return res.status(400).json({ success: false, message: 'You have already rated this book' });
    }
    
    //newRating
    const newRating = new Rating({ user: req.username, book: bookId, rating });

    book.ratings.push(newRating);

    //Calculating average rating
    const totalRatings = book.ratings.reduce((sum, r) => sum + r.rating, 0);
    book.avgRating = totalRatings / book.ratings.length;

    await Promise.all([newRating.save(), book.save()]);

    res.status(201).json({
      success: true,
      message: 'Rating added successfully',
      userRating: {
        user: req.username,
        rating: newRating.rating,
      },
      avgRating: book.avgRating,
    });
  } catch (error) {
    console.error('Error in addRating:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

//Edit Rating
const editRating = async (req, res) => {
  try {
    const { bookId, rating } = req.body;

    // Checking User Input
    if (!bookId || !rating || typeof rating !== 'number' || !Number.isInteger(rating) || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input for bookId or rating. Rating must be an integer and between 1 and 5.',
      });
    }

    // Book exists or not
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // User's rating exists in the ratings array or not
    const userRating = book.ratings.find((r) => r.user === req.username);

    if (!userRating) {
      return res.status(400).json({ success: false, message: 'You have not rated this book yet' });
    }

    userRating.rating = rating;

    // Recalculating average rating
    const totalRatings = book.ratings.reduce((sum, r) => sum + r.rating, 0);
    book.avgRating = book.ratings.length > 0 ? totalRatings / book.ratings.length : 0;

    await book.save();

    res.status(200).json({
      success: true,
      message: 'Rating updated successfully',
      userRating: {
        user: req.username,
        rating: rating,
      },
      avgRating: book.avgRating,
    });
  } catch (error) {
    console.error('Error in editRating:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


export { addRating, editRating }

