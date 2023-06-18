import inquirer from "inquirer";
import decryptMessage from "../utils/decrypt";
import { Mongoose } from "mongoose";
export default async function seeYourPassword(loginObject) {
  await verifytoken(loginObject);
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
