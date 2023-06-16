import inquirer from "inquirer";
import ora from "ora";
import signIn from "./signIn.js";
import signUp from "./signUp.js";
import performTask from "../utils/spinner.js";

export default async function userOption() {
  const { choose } = await inquirer.prompt({
    name: "choose",
    type: "list",
    choices: ["Sign In", "Sign Up", "Exit"],
  });

  const spinner = ora("Loading...").start();
  try {
    spinner.start();
    await performTask();
    spinner.stop();
    if (choose === "Sign In") {
      await signIn();
    } else if (choose === "Sign Up") {
      await signUp();
    } else {
      console.log("Closing application");
      return;
    }
  } catch(error) {
    spinner.fail("An error occurred");
    console.error(error);
  }
}
