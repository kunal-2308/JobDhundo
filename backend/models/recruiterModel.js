const mongoose = require("mongoose");
const validator = require("validator");

const recruiterSchema = mongoose.Schema({
  companyEmail: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Enter a Valid Email Address",
    },
  },
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message: "Enter a Strong Password",
    },
  },
  role: {
    type: String,
    default: "Recruiter",
  },
  companyLogo: {
    type: String,
    default: "/logos/guestMemoji-icon.png",
  },
  companyDescription: {
    type: String,
  },
  websiteLink: {
    type: String,
  },
  jobList: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Job",
  },
  profileIsComplete: {
    type: Boolean,
    default: false,
  },

});

const Recruiter = mongoose.model('Recruiter',recruiterSchema);

module.exports = Recruiter;