const Manager = require('../../models/managerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

export const signupManager = async(req,res)=>{
    try {
        let {email,password} = req.body;

        if(!email||!password){
            return res.status(400).json({
                message:"Something is missing",
                status:false
            });
        }
        else{
            let genSalt = await bcrypt.genSalt(12);
            let hashedPassword = await bcrypt.hash(password,genSalt);
            let newManager = new Manager({
                email,
                password:hashedPassword
            });
            await newManager.save();
            return res.status(201).json({
                message:"Manager created successfully",
                status:true,
                newManager
            });
        }
    } catch (error) {
        console.error("Manager signup error:", error);
        return res.status(500).json({
            message: "Internal server error",
            status: false,
            error: error.message
        });
    }
}

