import User from "../models/userModel.js";
export default async function signUpFunc(user) {
  try {
    const createdUser = new User(user);
    await createdUser.save();
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return Promise.reject(new Error(validationErrors.join(', ')));
    } else {
      return Promise.reject(new Error('An error occurred during sign up.'));
    }
  }
}
