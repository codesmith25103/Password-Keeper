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

const DB = "mongodb://root:root@main-shard-00-00-03xkr.mongodb.net:27017,main-shard-00-01-03xkr.mongodb.net:27017,main-shard-00-02-03xkr.mongodb.net:27017/main?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log("DB Connection successful");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
      welcome();
    });
  })
  .catch((error) => {
    console.error("DB Connection error:", error);
  });

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("WELCOME TO PASSWORD KEEPER");
  await sleep();
  rainbowTitle.stop();
  userOption();
}
