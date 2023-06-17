import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import signUpFunc from "../auth/signUpfunc.js";
import userOption from "./welcome.js";
import ora from "ora";
import User from "../models/userModel.js";

export default async function signUp() {
  const user = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter your name",
    },
    {
      name: "username",
      type: "input",
      message: "Enter your Username",
    },
    {
      name: "password",
      type: "password",
      message: "Enter your password",
    },
    {
      name: "confirmPassword",
      type: "password",
      message: "Confirm your password",
    },
    {
      name: "key",
      type: "password",
      message: "Enter your Key",
    },
    {
      name: "confirmKey",
      type: "password",
      message: "Confirm Your Key",
    },
  ]);
 
  try {
    // Save the user data in the database
    const ifUserExist = await User.find({ username: user.username });
    if (Object.keys(ifUserExist).length===0) {
      const spinner = ora("saving...").start();
      signUpFunc(user);
      spinner.start();
      performTask();
      spinner.stop();
      spinner.succeed("Sign Up successfully");
    } else {
      throw new Error("User already exist");
    }
  } catch (error) {
    console.error("Error occurred during signup:", error.message);
  }
  userOption();
}

// Function to save user data in the database
// const signupUser = async (user) => {
//   try {
//     // Create a new user document in the database
//     const createdUser = new User.create(user);
//     console.log(createdUser);
//     createdUser.save();
//     console.log("User created:", createdUser);
//   } catch (error) {
//     throw new Error("Error occurred while saving user data");
//   }
