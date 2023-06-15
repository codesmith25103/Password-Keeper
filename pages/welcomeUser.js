import figlet from "figlet";
import sleep from "../utils/sleep.js";
import userPage from "./user.js";
export default async function welcomeUser() {
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
