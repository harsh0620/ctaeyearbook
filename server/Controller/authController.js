const batchModel = require("../Models/batchModel");
const UserModel = require("../Models/userModel");
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email: email, password: password });
    // console.log(user);
    if (user.length > 0) {
      res.status(200).send({
        status: "Success",
        message: "Login Success",
        data: {
          user: user[0],
        },
      });
    }
  } catch (err) {
    res.status(401).send({
      status: "Failed",
      message: "Authentication Failed",
    });
  }
};

exports.signUp = async (req, res, next) => {
  const { name, email, password, branch, batch, insta, linkedIn, selectedFile, quote } = req.body;
  try {
    const user = await UserModel.create({
      name: name,
      email: email,
      password: password,
      branch: branch,
      batch: batch,
      insta: null,
      linkedIn: null,
      selectedFile: null,
      quote: null,
    });
    console.log(user);
    if (!user) {
      res.status(500).send({ message: "Invalid Data" });
    }
    res.status(201).send({
      status: "Success",
      message: "Registeration Successfull",
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "Failed",
      message: err.toString(),
    });
  }
};

exports.update = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { name, email, password, branch, batch, quote, insta, linkedIn, selectedFile } = req.body;
    // const user = await UserModel.find({ _id: req.body.id });
    const newUserData = {
      name,
      email,
      password,
      branch,
      batch,
      quote,
      insta,
      linkedIn,
      selectedFile,
      _id: req.body.id,
    };
    const user = await UserModel.findByIdAndUpdate(req.body.id, newUserData, { new: true });
    res.status(201).send({
      status: "Success",
      message: "Update Successfull",
      data: {
        user: user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "Failed",
      message: "Update Failed !",
    });
  }
};

exports.getUsers = async (req, res) => {
  console.log(req.params.batch);
  try {
    const users = await UserModel.find({ batch: req.params.batch });
    // console.log(users);
    res.status(200).send({
      status: "Success",
      data: {
        users: users,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: "Failed",
    });
  }
};

exports.uploadBatchPics = async (req, res) => {
  // console.log(req.body);
  try {
    const batchPic = await batchModel.create({
      selectedFile: req.body.selectedFile,
      batch: req.body.batch,
    });
    res.status(201).send({
      status: "Success",
      data: {
        batchPic,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: "Failed",
    });
  }
};

exports.getBatchPics = async (req, res, next) => {
  console.log(req.params.batch);
  try {
    const batchPics = await batchModel.find({ batch: req.params.batch });
    res.status(200).send({
      status: "Success",
      data: {
        batchPics,
      },
    });
  } catch (err) {
    res.status(400).send({
      status: "Failed",
    });
  }
};
