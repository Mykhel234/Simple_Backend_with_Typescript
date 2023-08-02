import express, {Request, Response} from "express"
import simpleModel from "../Model/simpleModel"


export const createUser = async(req:Request , res:Response):Promise<Response>=>{
    try {
        const {name,password,email,brand, product} =req.body
        const user= await simpleModel.create({
            name,password,email,brand, product
        })
        return res.status(201).json({
            message:"created successfully" ,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found"
        })
    }
}

export const getAllUser = async(req:Request , res:Response):Promise<Response>=>{
    try {
        const user =await simpleModel.find()
        return res.status(200).json({
            message:"gotten all user successfully" ,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found"
        })
    }
}

export const getOneUser = async(req:Request , res:Response):Promise<Response>=>{
    try {
        const {id} =req.params
        const user =await simpleModel.findById(id)
        return res.status(200).json({
            message:"gotten one user successfully" ,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found"
        })
    }
}

export const deleteUser = async(req:Request , res:Response):Promise<Response>=>{
    try {
        const {id} =req.params
        const user =await simpleModel.findByIdAndDelete(id)
        return res.status(200).json({
            message:"deleted successfully" ,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found"
        })
    }
}

export const updateUser = async(req:Request , res:Response):Promise<Response>=>{
    try {
        const {id} =req.params
        const {brand, product} =req.body
        const user =await simpleModel.findByIdAndUpdate(id,{brand, product},{new:true})
        return res.status(200).json({
            message:"updated successfully" ,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found"
        })
    }
}