import User from "../models/userModel.js";


// Create a new shelf for a user by username
export const createShelfByUsername = async (req, res) => {
  console.log(req.params, req.body)
  const { username } = req.user;
  const { label } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the shelf already exists
    if (user.shelves.find((shelf) => shelf.label === label)) {
      return res.status(400).json({ error: 'Shelf already exists' });
    }

    // Create a new shelf
    user.shelves.push({ label, default: false, books: [] });
    await user.save();

    return res.status(201).json({ message: 'Shelf created successfully' });
  } catch (error) {
    console.error(`Error creating shelf: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}



// Delete a custom shelf for a user
export const deleteShelf = async (req, res, next) => {
  const {username} = req.user
  const { shelfName } = req.params;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the shelf exists
    const shelfIndex = user.shelves.findIndex((shelf) => shelf.label === shelfName);

    if (shelfIndex === -1) {
      return res.status(404).json({ error: 'Shelf not found' });
    }

    // Check if the shelf is a default shelf
    if (user.shelves[shelfIndex].isDefault) {
      return res.status(400).json({ error: 'Cannot delete default shelves' });
    }

    // Remove the shelf from the array
    user.shelves.splice(shelfIndex, 1);
    await user.save();

    return res.status(200).json({ message: 'Shelf deleted successfully' });
  } catch (error) {
    console.error(`Error deleting shelf: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}



// Add a book to a shelf for a user
export const addBookToShelf = async (req, res) => {
  const { username } = req.user;
  const { shelfName } = req.params;
  const { bookId } = req.body; //or use isbn instead

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Find the shelf
    const shelf = user.shelves.find((s) => s.label === shelfName);

    if (!shelf) {
      return res.status(404).json({ error: 'Shelf not found' });
    }

    // Check if the book is already in the shelf
    if (shelf.books.includes(bookId)) {
      return res.status(400).json({ error: 'Book already in the shelf' });
    }

    // Add the book to the shelf
    shelf.books.push(bookId);
    await user.save();

    return res.status(200).json({
      message: `Book added to ${shelf.label} successfully`,
      shelf: shelf
    });
  } catch (error) {
    console.error(`Error adding book to shelf: ${error.message}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}




// Get detailed shelves 
export const getShelves = async (req, res, next) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password").populate({
      path: 'shelves.books',
      model: 'Book',
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // You now have user details with populated shelf data
    return res.status(200).json({ "shelves": user.shelves });
  } catch (error) {
    // console.error(`Error fetching user details: ${error.message}`);
    // return res.status(500).json({ error: 'Internal Server Error' });
    next(error.message)
  }
}