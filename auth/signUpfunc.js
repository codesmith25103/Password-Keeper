import User from "../models/userModel.js";
import errorHandling from "../controllers/errorContoller.js";
export default async function signUpFunc(user) {
    // const spinner=ora("Checking...").start();
    try{
      const createdUser = new User(user);
      createdUser.save();
    }
    catch(err)
    {
      throw new error;
    }
  
}
