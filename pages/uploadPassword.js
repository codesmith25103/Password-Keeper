import ora from "ora";
import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import userPage from "./user.js";
export default async function uploadPassword() {
  const password = await inquirer.prompt([
    {
      name: "userId",
      type: "input",
      message: "Enter user ID",
    },
    {
      name: "password",
      type: "input",
      message: "Enter Password",
    },
    {
      name: "key",
      type: "input",
      message: "Enter your key",
    },
  ]);
  const spinner=ora("Saving...").start();
  try
  {
    spinner.start()
    await performTask();
    spinner.succeed("Password Save");
    userPage()
  }
  catch
  {
    spinner.fail("Password not saved, error occure");
  }
}
