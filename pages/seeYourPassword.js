import inquirer from "inquirer";
//import decryptMessage from "../utils/decrypt";
//import { Mongoose } from "mongoose";

import performTask from "../utils/spinner.js";
import verifyToken from "../utils/verifyToken.js";

export default async function seeYourPassword(loginObject) {
  const userIdList = await verifyToken(loginObject);
  const detailList= await userIdList.populate("UserDetail");
  console.log(detailList);
  let exampleChoice = ["harry", "sankalp"];     
  const passwords = await inquirer.prompt([
    {
      name: "userId",
      type: "list",
      message: "Choose your userId",
      choices: exampleChoice,
    },
    {
      name: "key",
      type: "input",
      message: "Enter your key",
    },
  ]);
}
