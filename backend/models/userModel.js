const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema(
  {
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
      required: true,
      default: "",
    },

    bio: {
      type: String,
      validate: {
        validator: function (value) {
          return validator.isLength(value, { min: 1, max: 100 });
        },
        message: "Maximum 100 characters for description allowed",
      },
    },

    About: {
      type: String,
      validate: {
        validator: function (value) {
          return validator.isLength(value, { min: 1, max: 800 });
        },
        message: "Maximum 800 characters for description allowed",
      },
    },

    phoneNumber: {
      type: String,
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
      default: [],
    },

    profileIsComplete: {
      type: Boolean,
      default: false,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    resume: {
      type: String,
      default: null, // Will store the file path
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
