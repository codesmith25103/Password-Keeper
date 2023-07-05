import verifyToken from "../utils/verifyToken.js"
import UserDetail from "../models/userDetailModel.js";
import encryptMessage from "../utils/encrypt.js";
import inquirer from "inquirer";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import userPage from "./user.js";
export default async function updatePassword(loginObject) {
  try {
    const userIdList = await verifyToken(loginObject);
    const detailList = await User.findById(userIdList._id).populate(
      "userDetail"
    );
    let exampleChoice = [];

    for (let i = 0; i < Object.keys(detailList.userDetail).length; i++) {
      exampleChoice.push(detailList.userDetail[i].userId);
    }
    const passwords = await inquirer.prompt([
      {
        name: "userId",
        type: "list",
        message: "Choose your userId",
        choices: exampleChoice,
      },
      {
        name:"newPassword",
        type: "password",
        message:"Enter New Password",
      },
      {
        name: "key",
        type: "password",
        message: "Enter your key",
      },
    ]);
    const checkingKey = await bcrypt.compare(passwords.key, userIdList.key);
    if (!checkingKey) {
      throw new Error("Key is incorrect");
    } else {
      let UserPassword;
      for (let i = 0; i < Object.keys(detailList.userDetail).length; i++) {
        if (detailList.userDetail[i].userId === passwords.userId) {
          UserPassword = detailList.userDetail[i];
          break;
        }
      }
      const encryptedText=await encryptMessage(passwords.newPassword, passwords.key);
      const user=await UserDetail.findOneAndUpdate({_id:UserPassword._id}, {
        ciphertext:encryptedText.ciphertext,
        salt:encryptedText.salt,
        iv:encryptedText.iv,
      },
      { useFindAndModify: false });
      user.save();
    //   console.log(user);
      userPage(loginObject);

    }
  } catch (err) {
    console.log(err.message);
  }
}
