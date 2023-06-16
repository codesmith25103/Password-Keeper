import mongoose from "mongoose";
import User from "../models/userModel.js";

export default async function signUpFunc(user)
{
    try{
    const createdUser=new User(user);
    createdUser.save();
    }
    catch{
        console.log("error")
    }
}

