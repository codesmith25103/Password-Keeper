import inquirer from "inquirer";
//import decryptMessage from "../utils/decrypt";
import mongoose  from "mongoose";
import User from "../models/userModel.js";
import performTask from "../utils/spinner.js";
import verifyToken from "../utils/verifyToken.js";

export default async function seeYourPassword(loginObject) {
  const userIdList = await verifyToken(loginObject);
  console.log("user Id List", userIdList);
  const detailList= await User.findById(userIdList._id).populate("userDetail");
  console.log(detailList);
  let exampleChoice=[];
  console.log((detailList.userDetail))
  for(let i=0; i<Object.keys(detailList.userDetail).length; i++)
  {
    console.log("here");
    console.log(detailList.userDetail[i].userId)
    exampleChoice.push(detailList.userDetail[i].userId)
  }
  console.log(exampleChoice)
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
