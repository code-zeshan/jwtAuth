import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import userModel from "../../models/Users/Users.js"
import config from "config"


let secretKey =config.get("jwtSecret")

const router = express.Router();

router.post("/register", async(req,res)=>{
    try {
        const userData = req.body;
        let hashPassword =  await bcrypt.hash(userData.password,10)
        userData.password = hashPassword;
        console.log(userData);
        await userModel.create(userData)
        res.status(201).json({msg: "User Added Successfully!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router;