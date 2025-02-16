import mongoose from "mongoose";
// const mongoose = require("mongoose");
const Schema = mongoose.Schema;

type UserType = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
};

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
