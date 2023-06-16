import inquirer from "inquirer";
import userPage from "./user.js";
import ora from "ora";
import performTask from "../utils/spinner.js";
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
    await userPage()
  }
  catch{
    spinner.fail("Error occur");
  }
  
}
