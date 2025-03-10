const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

const getUserProfile = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    let decoded;
    try {
      decoded = jwt.decode(token, process.env.SECRET_KEY);
      console.log("Decoded value : ", decoded);
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    const email = decoded.email;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    return res.status(200).json({
      message: "User profile fetched successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkCookie = async (req, res) => {
  try {
    let cookie = req.cookies.token;
    if (!cookie) {
      return res.status(400).json({
        message: "Unauthorized: No token provided",
        status: false,
      });
    }
    return res.status(200).json({
      cookie,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Error occured",
      status: false,
    });
  }
};

const updateProfile = async(req,res) =>{
    try {
        //check for the cookie :
        let cookie = req.cookies.token;
        if(cookie){
            let decoded = jwt.decode(cookie, process.env.SECRET_KEY);
            const email = decoded.email;
            
            // Extract only the fields we want to allow updates for
            const updateFields = {};
            const { bio, About, phoneNumber, skills } = req.body;

            // Only add fields to updateFields if they exist in req.body
            if ('bio' in req.body) updateFields.bio = bio;
            if ('About' in req.body) updateFields.About = About;
            if ('phoneNumber' in req.body) updateFields.phoneNumber = phoneNumber;
            if ('skills' in req.body) updateFields.skills = skills;
            
            // Find and update user
            const updatedUser = await User.findOneAndUpdate(
                { email },
                { $set: updateFields },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({
                    message: "User not found",
                    status: false
                });
            }

            return res.status(200).json({
                message: "Profile updated successfully",
                user: updatedUser,
                status: true
            });

        } else {
            return res.status(401).json({
                message: "Unauthorized: No token provided",
                status: false
            });
        }
    } catch (error) {
        console.error("Profile update error:", error);
        return res.status(500).json({
            message: "Internal server error",
            status: false,
            error: error.message
        });
    }
}

module.exports = { getUserProfile, checkCookie, updateProfile };
