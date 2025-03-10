const mongoose = require("mongoose");

const managerSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: "Enter a valid email address",
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isStrongPassword(value);
      },
      message: "Enter a strong password",
    },
  },
  role: {
    type: String,
    default: "Manager",
  },
});

const managerModel = mongoose.model("Manager", managerSchema);
module.exports = managerModel;
