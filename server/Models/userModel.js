const mongoose = require("mongoose");
const validator = require("validator");
const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A name is definetly required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A email is reuired to register."],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "A password is required"],
    minlength: [8, "Password should be of length greater than or equal to 8"],
    select: false,
  },
  branch: {
    type: String,
    required: [true, "Branch needed !"],
  },
  batch: {
    type: String,
    required: [true, "Batch Required"],
  },
  quote: {
    type: String,
  },
  selectedFile: {
    type: String,
  },
  insta: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
});

const UserModel = mongoose.model("User", Schema, "Users");
module.exports = UserModel;
