import inquirer from "inquirer";
import ora from "ora";
import userOption from "./welcome.js";
import uploadPassword from "./uploadPassword.js";
import performTask from "../utils/spinner.js";
import verifyToken from "../utils/verifyToken.js";
export default async function userPage(loginObject=undefined) {
  try {
  const spinner = ora("Loading...").start();
  spinner.start();
  await performTask();
  spinner.stop();
  const user = verifyToken(loginObject);
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

 
    if (option.options == "Upload your Password") {
      await uploadPassword(loginObject);
    }
    else if(option.options=="See Your Password")
    {
      await uploadPassword(loginObject)
    } else {
      spinner.succeed("Logging Out successfully");
      userOption();
    }
  } catch (error) {
    console.log(error);
    // spinner.start();
    // await performTask();
    spinner.fail("You are not login");
    userOption()
  }
}
