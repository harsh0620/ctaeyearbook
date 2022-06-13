const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./Router/userRoutes");
const mongoose = require("mongoose");
app.use(express.json());
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection Successful!");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/user", userRouter);

module.exports = app;
