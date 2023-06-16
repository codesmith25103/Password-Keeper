import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: [true, "User Id must be unique and required"],
  },
  ciphertext: {
    type: String,
  },
  salt: {
    type: String,
  },
  iv: {
    type: String,
  },
});

const UserDetail= mongoose.model('UserDetail', userDetailSchema);

export default UserDetail;
