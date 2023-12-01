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
