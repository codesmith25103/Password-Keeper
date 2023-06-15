import inquirer from "inquirer";
export default async function enterYourKey()
{
    const key=await inquirer.prompt({
        name:"key",
        type:"input",
        message:"Enter your private key"
    })
}