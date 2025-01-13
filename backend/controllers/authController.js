const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true, 
  sameSite: "none", 
  maxAge: 10 * 24 * 60 * 60 * 1000, 
};


const register = async (req, res) => {
  let { auth0Id, email, name, picture } = req.body;

  if (!auth0Id || !email) {
    return res.status(400).json({ message: "auth0Id and email are required",status:false});
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
    } else {
      console.log("User already exists");
    }

    const token = jwt.sign(
      { auth0Id: user.auth0Id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "10d" }
    );

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    return res.status(user.isNew ? 201 : 200).json({
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

const login = async (req, res) => {
  let { auth0Id, email, name, picture } = req.body;
  console.log('Login Success');
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
    }

    const token = jwt.sign(
      { auth0Id: user.auth0Id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "10d" }
    );

    // Set the token as an HTTP-only cookie
    res.cookie("token", token, COOKIE_OPTIONS);

    return res.status(user.isNew ? 201 : 200).json({
      message: user.isNew ? "User registered successfully" : "Login Success",
      user,
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const check = async(req,res)=>{
  try {
    console.log('Test');
    return res.status(200).json({message:"Happy"});
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({message:error.message});
  }
}

module.exports = { register, login,check };
