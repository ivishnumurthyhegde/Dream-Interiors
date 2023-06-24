const bcrypt = require("bcryptjs");
const User = require("../../model/User");
const { AppErr, appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");


//Register
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      return next(appErr("User Already Exist", 400));
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      fullname: user.fullname,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
};

//login
const userLoginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (!userFound) return next(new AppErr("Invalid login credentials", 400));

    //check for password validity
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch)
      return next(new AppErr("Invalid login credentials", 400));

    res.json({
      status: "success",
      fullname: userFound.fullname,
      id: userFound._id,
      token: generateToken(userFound._id),
    });
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
};

//profile
const userProfileCtrl = async (req, res) => {
  console.log(req.user);

  try {
    const user = await User.findById(req.user);
    res.json(user);
  } catch (error) {
    console.log(new AppErr(error.message, 500));
    next(new AppErr(error.message, 500));
  }
};


module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
};
