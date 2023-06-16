import User from "../models/userModel.js";
export default async function signUpFunc(user) {
    // const spinner=ora("Checking...").start();
      const createdUser = new User(user);
      createdUser.save();
  
}
