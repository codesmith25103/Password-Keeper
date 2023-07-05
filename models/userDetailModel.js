import mongoose from "mongoose";
const userDetailSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "User Id must be required"],
  },
  ciphertext: {
    type: String,
  },
  salt: {
    type: String,
  },
  iv: {
    type: String,
  }

});

const UserDetail= mongoose.model('UserDetail', userDetailSchema);

export default UserDetail;
