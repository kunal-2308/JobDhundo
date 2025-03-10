const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

const getUserProfile = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User profile fetched successfully",
      user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const checkCookie = async (req, res) => {
  try {
    let {email} = req.user;
    return res.status(200).json({
      message : `Email : ${email} got success`
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    // Use `req.user.email` set by protectedUser middleware
    const { email } = req.user;

    // Extract only allowed update fields
    const updateFields = {};
    const { bio, About, phoneNumber, skills } = req.body;

    if ("bio" in req.body) updateFields.bio = bio;
    if ("About" in req.body) updateFields.About = About;
    if ("phoneNumber" in req.body) updateFields.phoneNumber = phoneNumber;
    if ("skills" in req.body) updateFields.skills = skills;

    // Find and update user
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found", status: false });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
      status: true,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return res.status(500).json({
      message: "Internal server error",
      status: false,
      error: error.message,
    });
  }
};

module.exports = updateProfile;


module.exports = { getUserProfile, checkCookie, updateProfile };
