import  express, {Application} from "express";
import { dbConnect } from "./Config/db";
import { mainApp } from "./main";
import dotenv from "dotenv"

dotenv.config()

const realPort = parseInt(process.env.APPLICATION_PORT!)

const port:Number =realPort

const app:Application = express()

mainApp(app)

const server =app.listen(port,()=>{
    console.log(" ")
    dbConnect()
console.log("server is listening")
})

process.on("uncaughtException" ,(error:any)=>{
console.log("server is shutting down to uncaught exception")
console.log(error)
process.exit(1)
})

process.on("unhandledRejection" ,(reason:any)=>{
console.log("server is shutting down due to unhandled rejection")
console.log(reason)
server.close(()=>{
    process.exit(1)
})
})
