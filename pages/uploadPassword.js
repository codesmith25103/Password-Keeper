import ora from "ora";
import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import userPage from "./user.js";
import encryptMessage from "../utils/encrypt.js";
import verifyToken from "../utils/verifyToken.js";
import userAllPassword from "../dB/userAllpassword.js";
import UserDetail from "../models/userDetailModel.js";

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

      
    
      //await userAllPassword(password);
      spinner.succeed("Password Save");
      const encryptedMessage = encryptMessage(password.password, password.key);
      
      console.log(await encryptedMessage);
      const passwordDetail = {
        userId: password.userId,
        ciphertext: encryptMessage.ciphertext,
        salt: encryptMessage.salt,
        iv: encryptMessage.iv
      }
      await userAllPassword(passwordDetail);
      userPage(loginObject);
    } catch (error) {
      spinner.fail("Password not saved, error occure");
      console.log(error)
    }
  }

