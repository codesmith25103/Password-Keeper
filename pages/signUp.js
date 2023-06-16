import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import signUpFunc from "../auth/signUpfunc.js";
import ora from "ora";


export default async function signUp() {
  const user = await inquirer.prompt([
    {
      name:"name", 
      type:"input",
      message:"Enter your name"
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
  const spinner=ora("saving...").start()
  try {
    // Save the user data in the database
    signUpFunc(user);
    spinner.start();
    performTask();
    spinner.stop()
    spinner.succeed("Sign Up successfully")
  } catch (error) {
    console.error("Error occurred during signup:", error);
  }
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

