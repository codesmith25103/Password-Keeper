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


dotenv.config(); // Load environment variables from .env file

// mongodb+srv://root:<password>@cluster0.j2xswwz.mongodb.net/?retryWrites=true&w=majority

await mongoose
  .connect("mongodb+srv://root:root@cluster0.j2xswwz.mongodb.net/PasswordKeeper?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db successfully");
  })
  .catch((err) => {
    console.log("errorrrrrrrrrrrrr");
    console.log(err);
  });

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("WELCOME TO PASSWORD KEEPER");
  await sleep();
  rainbowTitle.stop();
  userOption();
}
await welcome();
