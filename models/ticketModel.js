const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "user",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: ["iPhone", "Macbook Pro", "iPad", "iMac"],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);