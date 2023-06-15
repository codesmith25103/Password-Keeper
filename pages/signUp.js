import inquirer from "inquirer";
import userOption from "./welcome.js";
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
  userOption();
}
