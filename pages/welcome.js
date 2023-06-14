import inquirer from "inquirer";
export default async function userOption()
{
    const option=await inquirer.prompt({
        name: "choose",
        type:'list',
        choices:[
            "Sign in",
            "Sign Up",
            "Exit"
        ]
    })
    console.log(option);
}

