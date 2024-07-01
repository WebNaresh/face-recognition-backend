const express = require("express");
const { uploadFace, getFaceData } = require("../controller/faceController");
const router = express.Router();
router.route("/upload-face").post(uploadFace);
router.route("/get-face/:label").get(getFaceData);
module.exports = router;
