import figlet from "figlet";
import sleep from "../utils/sleep.js";
import signIn from "./signIn.js";
import userPage from "./user.js";
import verifyToken from "../utils/verifyToken.js";
export default async function welcomeUser(tokenObject) {
  try{
  verifyToken(tokenObject);
  figlet("Welcome  Lata", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
  await sleep();
  await userPage();

}
catch(err) {
  console.log("Login failed", err);
  signIn();

}
}
