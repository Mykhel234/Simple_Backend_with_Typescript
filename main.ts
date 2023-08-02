import express, {Application} from "express"
import router from "./Router/simpleRouter"

export const mainApp=(app:Application)=>{
app.use(express.json())
.use("/api/v1" ,router)

}