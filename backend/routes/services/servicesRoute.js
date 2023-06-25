const express = require("express");
const {
  bookServiceCtrl,
  getServicesCtrl,
} = require("../../controllers/services/servicesCtrl");
const isLogin = require("../../middlewares/isLogin");

const accountRoute = express.Router();

//POST/api/v1/accounts
accountRoute.post("/", isLogin, bookServiceCtrl);

//GET/api/v1/accounts
accountRoute.get("/", getServicesCtrl);

module.exports = accountRoute;
