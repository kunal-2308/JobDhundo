const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  auth0Id: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Invalid email format",
    },
  },

  userName: {
    type: String,
    required:true,
    default:''
  },

  description: {
    type: String,
    validate: {
      validator: function (value) {
        return validator.isLength(value, { min: 1, max: 200 });
      },
      message: "Maximum 200 characters for description allowed",
    },
  },

  phoneNumber: {
    type: String, // Changed to String
    validate: {
      validator: function (value) {
        return validator.isMobilePhone(value, "any");
      },
      message: "Invalid Phone Number Format",
    },
  },

  role: {
    type: String,
    default: "User",
  },

  profilePhoto: {
    type: String,
    default: "/logos/guestMemoji-icon.png",
  },

  appliedJobs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Application",
  },

  savedJobs: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Job",
  },

  skills: {
    type: [String],
    default:[],
  },

  profileIsComplete: {
    type: Boolean,
    default: false,
  },

  isBlocked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
