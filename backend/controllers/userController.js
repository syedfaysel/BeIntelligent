import User from "../models/userModel.js";
import bcrypt from "bcryptjs";


// get user controller ... //
export const getUserController = async (req, res, next) => {
  try {
    const { userid, username } = req.params;
    
    const user = await User.findOne({ username }).select("-password");
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    
    res.status(200).json({
      message: "user fetched success",
      success: true,
      user,
    });
    next();
  } catch (error) {
    next(error);
  }
};




export const getUserDetails = async (req, res, next) => {
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
    return res.status(200).json({ user });
  } catch (error) {
    // console.error(`Error fetching user details: ${error.message}`);
    // return res.status(500).json({ error: 'Internal Server Error' });
    next(error.message)
  }
}




