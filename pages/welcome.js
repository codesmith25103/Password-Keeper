import inquirer from "inquirer";
import signIn from "./signIn.js";
import signUp from "./signUp.js";

export default async function userOption() {

  const { choose } = await inquirer.prompt({
    name: "choose",
    type: 'list',
    choices: [
      "Sign In",
      "Sign Up",
      "Exit"
    ]
  });

  if (choose === "Sign In") {
    await signIn();
  } else if (choose === "Sign Up") {
    await signUp();
  } else {
    console.log("Closing application");
    return;
  }

}
