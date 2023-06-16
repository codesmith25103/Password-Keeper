import inquirer from "inquirer";

import ora from "ora";
import performTask from "../utils/spinner.js";
import welcomeUser from "./welcomeUser.js";
import { decrypt } from "dotenv";
export default async function signIn() {
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
  ]);
  // const { username, password } = user;
  // console.log("Username:", username);
  // console.log("Password:", password);
  const spinner = ora("Loading...").start();
  try
  {
    spinner.start();
    await performTask();
    spinner.stop();
    await welcomeUser();
  }
  catch{
    spinner.fail("Error occur");
  }
  
}
