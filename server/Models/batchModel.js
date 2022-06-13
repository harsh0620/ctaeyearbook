const mongoose = require("mongoose");
const validator = require("validator");
const Schema = new mongoose.Schema({
  selectedFile: {
    type: String,
  },
  batch: {
    type: String,
  },
});

const batchModel = mongoose.model("Batch_pics", Schema, "Batch_pics");
module.exports = batchModel;
