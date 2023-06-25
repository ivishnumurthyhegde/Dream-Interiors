const Services = require("../../model/Services");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const bookServiceCtrl = async (req, res, next) => {
  const { name, serviceType,schedule, notes } = req.body;
  try {
    //1. Find the logged in user
    const userFound = await User.findById(req.user);
    if (!userFound) return next(new AppErr("User not found", 404));
    //2. Book the service
    const service = await Services.create({
      name, 
      serviceType,
      schedule,
       notes,
      createdBy: req.user,
    });
    //3push the service into users services field
    userFound.servicesBooked.push(service.name);
    //4. resave the user
    await userFound.save();
    res.json({
      status: "success",
      data: service,
    });
  } catch (error) {
    next(error);
  }
};

//all
const getServicesCtrl = async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  bookServiceCtrl,
  getServicesCtrl,
};
