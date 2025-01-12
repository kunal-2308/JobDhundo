const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  let { auth0Id, email, name, picture } = req.body;

  if (!auth0Id || !email) {
    return res.status(400).json({ message: "auth0Id and email are required" });
  }

  if (!name || name.trim().length === 0) {
    name = email;
  }

  try {
    let user = await User.findOne({ auth0Id });

    if (!user) {
      user = new User({
        auth0Id,
        email,
        userName: name,
        profilePhoto: picture,
      });
      await user.save();
      console.log("User created successfully");
    } else {
      console.log("User already exists");
    }

    const token = jwt.sign(
      { auth0Id: user.auth0Id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "10d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 10 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(user.isNew ? 201 : 200)
      .json({
        message: user.isNew
          ? "User registered successfully"
          : "User already exists",
        user,
      });
  } catch (error) {
    console.error("Error during registration:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register };
