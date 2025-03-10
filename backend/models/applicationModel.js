const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job", // Refers to the Jobs collection
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Refers to the Users collection
      required: true,
    },
    status: {
      type: String,
      enum: ["Applied", "Pending", "Selected", "Rejected"], // Allowed statuses
      default: "Pending",
    },
  },
  { timestamps: true } // Automatically creates createdAt and updatedAt fields
);

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
