// const User = require('./../models/userModel');
// const jwt = require('jsonwebtoken');
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import AppError from "../utils/AppError.js";
import { error } from "console";
import userOption from "../pages/welcome.js";

import ora from "ora";



export default async function login(user) {
    const userName = user.username;
    const userPassword = user.password;
    //check if username and password exist
    if (!userName || !userPassword) {
    
        return Promise.reject(new Error('An error occurred'));
    }
    else {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        const validPassword= await bcrypt.compare(User.username, userPassword);
        if(!validPassword)
        {
            return Promise.reject(new Error('An error occurred'));
        }
        else
        {
            const obj = {
                status: "success",
                statusCode: 201,
                token

            }
            return obj;
        }

    }
    //

    //if everything is ok 
    const token = '';





}
