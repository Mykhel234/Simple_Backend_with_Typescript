import mongoose from "mongoose";

interface simpleDetails{
    password?:string;
    email?:string;
    name?:string;
    product?:string;
    brand?:string
}

interface simpleData extends simpleDetails, mongoose.Document{}

const simpleModel= new mongoose.Schema(
    {
        password:{
            type:String,
            min:6
        },
        email:{
            type:String,
            unique:true,
            trim:true,
            require:true
        },
        brand:{
            type:String
        },
        name:{
            type:String,
            trim:true,
            require:true
        },
        product:{
type:String
        }
    },{timestamps:true}
)

export default mongoose.model<simpleData>("simple" , simpleModel)