// This middleware will handle user auth that mean it will verify the token when user send login request 

const express = require('express')
const jwt = require("jsonwebtoken")
const UserModel = require("../models/user.model");

const router = express.Router();

async function authenticateUser(req, res, next) {
 const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Unauthorized please Login first"})
    }

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        const user=await UserModel.findById({
            _id:decoded.id
        })

        res.user=user;
       
        next();
        return res.status(200).json({message:"User authenticated successfully",user:user});
    }
    catch(err){
        return res.status(401).json({message:"Invalid token please Login first"})
    } 
}

module.exports = authenticateUser ;