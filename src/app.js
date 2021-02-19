require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");
const peopleRouter = require('./Routes/pet-router');
const petRouter = require('./Routes/pet-router');

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(express.json()); 

app.use('/api/people', peopleRouter); //See waiting list so we can add our name
app.use('/api/pets', petRouter); //See upcoming list of pets with 1 cat and 1 dog, adopt 1 cat or 1 dog. 

app.get("/", (req, res) => { 
  res.status(200).send("Hello, boilerplate!");
});

app.use(function errorHandler(error, req, res) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
