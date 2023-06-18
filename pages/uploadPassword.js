import ora from "ora";
import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import userPage from "./user.js";
import encryptMessage from "../utils/encrypt.js";
import verifyToken from "../utils/verifyToken.js";
export default async function uploadPassword(loginObject) {
  const spinner = ora("Saving...").start();
  spinner.start();
  await performTask();
  spinner.stop();
  try {
    let freshUser = await verifyToken(loginObject);
    await freshUser.populate();
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

    spinner.succeed("Password Save");
    const encryptedMessage = encryptMessage(password.password, password.key);
    console.log(await encryptedMessage);
    userPage();
  } catch(error) {
    spinner.fail("Password not saved, error occure");
    console.log(error)
  }
}
