const mongoose = require("mongoose");

const addpersonSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    spoucename: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    contact_no: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    taluk: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const addperson = mongoose.model("addperson", addpersonSchema);

module.exports = addperson;
