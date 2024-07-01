const mongoose = require("mongoose");
const FaceData = new mongoose.Schema({
  descriptor: [Number],
  label: {
    type: String,
    required: [true, "Please Enter Your label"],
    maxLength: [30, "label cannot exceed 30 characters"],
    minLength: [4, "label should have more than 4 characters"],
    unique: true,
  },
});
const FaceDataModel = mongoose.model("FaceData", FaceData);
module.exports = { FaceDataModel };
