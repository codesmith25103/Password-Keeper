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
    if (Object.keys(ifUserExist).length === 0) {
      await signUpFunc(user); // Await the signUpFunc function
      const spinner = ora("saving...").start();
      spinner.succeed("Sign Up successfully");
    } else {
      throw new Error("User already exists");
    }
  } catch (error) {
    console.error("Error occurred during signup:", error.message);
  }
  userOption();
}
