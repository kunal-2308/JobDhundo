const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

const getUserProfile = async (req, res) => {
    try {
        const token = req.cookies.token;
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        let decoded;
        try {
            decoded = jwt.decode(token, process.env.SECRET_KEY);
            console.log("Decoded value : ",decoded);
        } catch (err) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        const email = decoded.email;
        console.log("Looking up user with email:", email);
        
        const user = await User.findOne({ email });
        console.log("User found:", JSON.stringify(user, null, 2));
        
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("✅ User found:", user);

        return res.status(200).json({
            message: "User profile fetched successfully",
            user,
        });

    } catch (error) {
       
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const checkCookie = async(req,res) =>{
    try {
        let cookie = req.cookies.token;
        console.log("Cookie : ",cookie);
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message : "Error occured",
            status:false
        });
    }
}

module.exports = {getUserProfile,checkCookie};
