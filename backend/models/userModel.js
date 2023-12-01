import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

//schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "password should be atleast 6 character"],
      select: true,
    },
    bio: {
      type: String,
    },
    preferredGenres: [{ type: String }],
  },
  { timestamps: true }
);

// middlewares: //
//for password hashing
userSchema.pre("save", async function () {
  if (!this.isModified) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
// for password checking 
userSchema.methods.comparPassword = async function (userPassword) {
  const isMatched = await bcrypt.compare(userPassword, this.password)
  return isMatched;
}

// JSON webtoken
userSchema.methods.createJWT = function () {
  return JWT.sign({ userid: this._id, email: this.email, username: this.username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export default mongoose.model("User", userSchema);
