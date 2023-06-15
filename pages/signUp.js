import inquirer from "inquirer";
import userOption from "./welcome.js";
import performTask from "../utils/spinner.js";
import ora from "ora";
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
  const spinner=ora("Loading..").start();
  try{
    spinner.start();
    await performTask();
    spinner.succeed("User created");
    userOption();
  }
  catch{
    spinner.fail("Error Occur")
  }
 
}
