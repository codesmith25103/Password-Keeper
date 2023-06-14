#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'
import { createSpinner } from "nanospinner";


const sleep=(ms=2000)=>new Promise((r)=>{
    setTimeout(r, ms)
})


async function welcome()
{
    const rainbowTitle=chalkAnimation.rainbow("WELCOME TO PASSWORD KEEPER")
    await sleep();
    rainbowTitle.stop();
    userOption();
}

async function userOption()
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

welcome();
