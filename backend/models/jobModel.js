const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    intake: {
      type: Number,
      default: null, // Optional field
    },
    salary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    requirementSkills: {
      type: [String], // Array of required skills
      required: true,
    },
    eligibilityCriteria: {
      grades: {
        type: Number,
        required: true,
      },
      dept: {
        type: [String], // Checkboxes (departments allowed)
        required: true,
      },
    },
    rounds: {
      type: String, // Textual format (e.g., "Technical + HR Interview")
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application", // Reference to Applications model
      },
    ],
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to user/admin who created the job
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
