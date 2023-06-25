const mongoose = require("mongoose");

//user schema

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      enum: [
        "Space Planning",
        "Concept Development",
        "Furniture and Fixture Selection",
        "Customization and Millwork",
        "Lighting Design",
        "Renovation and Remodeling",
        "Styling and Decorative Accessories",
      
      ],
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
  
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    notes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//model
const Services = mongoose.model("Services", serviceSchema);

module.exports = Services;
