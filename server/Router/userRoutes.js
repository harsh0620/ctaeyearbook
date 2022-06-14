const express = require("express");
const { login, signUp, update, getUsers, uploadBatchPics , getBatchPics } = require("../Controller/authController");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.post("/update", update);
router.get("/getUsers/:batch", getUsers);
router.post("/upload_batchPic", uploadBatchPics);
router.get("/batch_pics/:batch", getBatchPics);
module.exports = router;
