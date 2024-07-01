// uploadFace a User
const ErrorHandler = require("../utils/errorHandler");
const catchAssyncError = require("../middleware/catchAssyncError");
const { FaceDataModel } = require("../models/faceData/model");

exports.uploadFace = catchAssyncError(async (req, res, next) => {
  const { descriptor, label } = req.body;
  console.log(`🚀 ~ file: faceController.js:8 ~  { descriptor, label }:`, {
    descriptor,
    label,
  });
  if (!descriptor || !label) {
    return res.status(400).json({
      success: false,
      message: "Please provide a descriptor and label",
    });
  }
  const searchUniqueLabel = await FaceDataModel.findOne({ label });
  if (searchUniqueLabel) {
    return res.status(400).json({
      success: false,
      message: "This label is already exist",
    });
  }
  const faceData = await FaceDataModel.create({
    descriptor,
    label,
  });
  console.log(`🚀 ~ file: faceController.js:29 ~ faceData:`, faceData);
  return res.status(201).json({
    success: true,
    faceData,
  });
});

exports.getFaceData = catchAssyncError(async (req, res, next) => {
  const { label } = req.params;
  const faceData = await FaceDataModel.findOne({ label });
  return res.status(200).json({
    success: true,
    faceData,
  });
});
