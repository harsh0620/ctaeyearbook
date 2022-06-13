const UserModel = require("../Models/userModel");
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email: email, password: password });
    console.log(user);
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
  const { name, email, password, branch, batch } = req.body;
  try {
    const user = await UserModel.create({
      name: name,
      email: email,
      password: password,
      branch: branch,
      batch: batch,
    });
    console.log(user);
    if (!user) {
      res.status(500).send({ message: "Invalid Data" });
    }
    res.status(201).send({
      status: "Success",
      message: "Registeration Successfull",
      data: {
        user: user[0],
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
