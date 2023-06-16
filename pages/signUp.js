import inquirer from "inquirer";
import User from "../models/userModel.js";



export default async function signUp() {
  const user = await inquirer.prompt([
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
    await signupUser(user);
    console.log("Signup successful!");
  } catch (error) {
    console.error("Error occurred during signup:", error);
  }
}

// Function to save user data in the database
const signupUser = async (user) => {
  try {
    // Create a new user document in the database
    const createdUser = await User.create(user);
    console.log("User created:", createdUser);
  } catch (error) {
    throw new Error("Error occurred while saving user data");
  }
};
