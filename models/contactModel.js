const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },
    contact: {
      type: String,
      required: [true, "Please add the contact number"],
    },
  },
  {
    timestampa: true,
  }
);

modules.exports = mongoose.model("Contact",contactSchema);