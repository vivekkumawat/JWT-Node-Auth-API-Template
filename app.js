const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
// Import Routes
const indexRouter = require("./src/routes/index");

// Connecte to DB
mongoose.connect(
  process.env.DB_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log("Unable to connect to DB " + error);
    }
    console.log("Connected to DB Successfully");
  }
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api", indexRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
