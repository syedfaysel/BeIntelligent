import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

// signup controller ...//
export const signupController = async (req, res, next) => {
  try {
    const { username, firstName, lastName, email, password, bio, preferredGenres } = req.body;
    //validate
    if (!username) {
      next("username is required");
    }
    if (!email) {
      next("email is required");
    }
    if (!password) {
      next("password is required");
    }

    //check if a user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      next("user already exists");
    }

    const shelves = [
      {label: "To Read", isDefault: true},
      {label: "Reading", isDefault: true},
      {label: "Read", isDefault: true},
    ]

    const newUser = await User.create({ username, firstName, lastName, email, password, preferredGenres, bio, shelves });
    // json token
    const token = newUser.createJWT();

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).send({
      success: true,
      message: "User created successfully",
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// login controller ... //
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    // can alternatively use user.comparePassword
    const auth = await bcrypt.compare(password, user.password);
    console.log(auth)
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    //after that create a token & send response
    // user.password = undefined; // for security purpose
    const token = user.createJWT();
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user,
      token,
    });
    next();
  } catch (error) {
    next(error);
  }
};
