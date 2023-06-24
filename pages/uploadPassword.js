import ora from "ora";
import inquirer from "inquirer";
import performTask from "../utils/spinner.js";
import userPage from "./user.js";
import encryptMessage from "../utils/encrypt.js";
import verifyToken from "../utils/verifyToken.js";
import userAllPassword from "../dB/userAllpassword.js";
import UserDetail from "../models/userDetailModel.js";
import bcrypt from "bcryptjs"
// import decryptMessage from "../utils/decrypt.js";

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

      const checkingKey=await bcrypt.compare(password.key, freshUser.key)
      if(!checkingKey)
      {
        throw new Error("Key is invalid");
      }

      //await userAllPassword(password);
      spinner.succeed("Password Save");
      const encryptedMessage =await encryptMessage(password.password, password.key);
      
  
      const passwordDetail = {
        userId: password.userId,
        ciphertext: encryptedMessage.ciphertext,
        salt: encryptedMessage.salt,
        iv: encryptedMessage.iv
      }
     
      //console.log(passwordDetail);
      await userAllPassword(passwordDetail, loginObject);

      userPage(loginObject);
    } catch (error) {
      spinner.fail("Password not saved, error occure");
      console.log(error)
    }
  }