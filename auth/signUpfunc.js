import User from "../models/userModel.js";
export default async function signUpFunc(user) {
    // const spinner=ora("Checking...").start();
    if (!user) {
      const createdUser = new User(user);
      createdUser.save();
    }
    else
    {
        throw new Error("User already exist");
    }
}
