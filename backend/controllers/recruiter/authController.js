const Recruiter = require("../../models/recruiterModel"); // Correct path to model
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcrypt");

const signUp = async (req, res) => {
  try {
    let { companyName, companyEmail, password } = req.body;
    let company = await Recruiter.findOne({ companyEmail });

    if (!company) {
      //create a new company and hash the password and tore
      let salt = await bcryptjs.genSalt(10);
      let hashedPassword = await bcryptjs.hash(password, salt);
      const newCompany = new Recruiter({
        companyName,
        companyEmail,
        password: hashedPassword,
      });

      await newCompany.save();
      return res.status(200).json({
        message: "Organisation Registered Successfully",
        status: true,
        newCompany,
      });
    } else {
      return res.status(201).json({
        message: "Organisation already exists",
        status: true,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginRecruiter = async (req, res) => {
  let { companyEmail, password } = req.body;
  try {
    //check if the Recruiter exist or not:
    let recruiter = await Recruiter.findOne({ companyEmail });

    let token = jwt.sign({ companyEmail }, process.env.SECRET_KEY, {
      expiresIn: "3d",
    });
    if (recruiter) {
      //check for password:
      let result = await bcryptjs.compare(password, recruiter.password);
      if (result) {
        //password valid so to login procedure:
        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        });
        return res.status(200).json({
          message: "Login Success",
          status: true,
          recruiter,
        });
      } else {
        return res.status(400).json({
          message: "Invalid Credentials",
          status: false,
        });
      }
    } else {
      return res.status(400).json({
        message: "Organisation not found!",
        status: false,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
      status: false,
    });
  }
};

const logoutRecruiter = async (req, res) => {
  try {
    res.clearCookie('token');
    return res.status(200).json({
      message: "Logged out successfully",
      status: true,
    });
  } catch (error) {
    return res.status(400).json({
      message:error.message,
      status:false
    });
  }
};

module.exports = { signUp, loginRecruiter, logoutRecruiter }; // Export signUp function
