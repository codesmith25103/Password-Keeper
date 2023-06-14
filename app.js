#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'
import { createSpinner } from "nanospinner";
import userOption from './pages/welcome.js'
import sleep from "./utils/sleep.js";




async function welcome()
{
    const rainbowTitle=chalkAnimation.rainbow("WELCOME TO PASSWORD KEEPER")
    await sleep();
    rainbowTitle.stop();
    userOption();
}
welcome();
