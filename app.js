#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import { createSpinner } from "nanospinner";
import userOption from './pages/welcome.js';
const port = process.env.PORT || 3000;
import express from 'express';
const app = express();
import sleep from "./utils/sleep.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ora from "ora";
dotenv.config(); // Load environment variables from .env file

// mongodb+srv://root:<password>@cluster0.j2xswwz.mongodb.net/?retryWrites=true&w=majority
try{
// console.log('Attempting to connect to the database...');
const spinner = ora("starting...").start();
spinner.start();
await mongoose
  .connect("mongodb+srv://root:root@cluster0.j2xswwz.mongodb.net/PasswordKeeper?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log();
  })
  .catch((err) => {
    console.log("errorrrrrrrrrrrrr");
    console.log(err);
  });
spinner.stop();
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("WELCOME TO PASSWORD KEEPER");
  await sleep();
  rainbowTitle.stop();
  userOption();
}
await welcome();
}
catch(err)
{
  console.log(err);
}
