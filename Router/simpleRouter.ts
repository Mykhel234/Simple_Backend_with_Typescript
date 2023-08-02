import { Router,Request,Response } from "express";
import { createUser, deleteUser, getAllUser, getOneUser, updateUser } from "../Controller/simpleController";

const router= Router()

router.route("/home").get((req:Request, res:Response)=>{
    return res.status(200).json({
        message:"welcome home"
    })
})

router.route("/create").post(createUser)
router.route("/get-all").get(getAllUser)
router.route("/get-one/:id").get(getOneUser)
router.route("/delete/:id").delete(deleteUser)
router.route("/update/:id").patch(updateUser)

export default router