import inquirer from "inquirer";

export default async function signIn() {
  const user = await inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "Enter your Username",
    },
    {
      name: "password",
      type: "password",
      message: "Enter your password",
    },
  ]);

  // You can add your logic here to process the user's input
  // For example, you can check if the entered credentials are valid
  // and perform any necessary authentication or authorization steps.
  // You can also store the user's input or perform any other operations as needed.

  // Example of accessing the username and password entered by the user:
  const { username, password } = user;
  console.log("Username:", username);
  console.log("Password:", password);
}
