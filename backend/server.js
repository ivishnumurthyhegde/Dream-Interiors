const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler");
const cors= require("cors");
require("./config/dbConnect");
const serviceRoute= require("./routes/services/servicesRoute")
const usersRoute = require("./routes/users/usersRoute");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data
//corse middleware
//cors
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Dream Interiors API",
  
  });
});
//users route
app.use("/api/v1/users", usersRoute);

app.use("/api/v1/services", serviceRoute);

//Error handlers
app.use(globalErrHandler);
//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));
