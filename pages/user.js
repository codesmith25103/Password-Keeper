import inquirer from "inquirer";
import ora from "ora";
import userOption from "./welcome.js";
import uploadPassword from "./uploadPassword.js";
import performTask from "../utils/spinner.js";

export default async function userPage() {
  const option = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      choices: [
        "Upload your Password",
        "See Your Password",
        "Update Your Password",
        "LogOut",
      ],
    },
  ]);
  const spinner = ora("Loading...").start();
  try {
    spinner.start();
    await performTask();
    spinner.stop();
    if (option.options == "Upload your Password") {
      await uploadPassword();
    } else {
      spinner.succeed("Logging Out successfully");
      userOption();
    }
  } catch {
    spinner.start();
    await performTask();
    spinner.fail("Error occure");
  }
}
