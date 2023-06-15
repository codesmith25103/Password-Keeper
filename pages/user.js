import inquirer from "inquirer";

export default async function userPage() {
  const option=inquirer.prompt([
    {
      name: "option",
      type: "list",
      choices: [
        "Upload your Password",
        "See Your Password",
        "Update Your Password",
        "LogOut",
      ],
    },
  ]);
}
