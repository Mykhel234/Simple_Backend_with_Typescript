import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const String:string =process.env.APPLICATION_STRING!

export const dbConnect=()=>{
    mongoose.connect(String).then(()=>{
        console.log("database is connected")
    })
}