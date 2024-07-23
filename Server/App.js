const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "https://www.rowgrid.in",
    credentials: true,
  })
);

//route
const contactForm = require("./Controllers/contactController");
app.use("/api/v2", contactForm);

//Error handling
const ErrorHandler = require("./Utils/ErrorHandler");
app.use(ErrorHandler);

module.exports = app;
