//server start up

//JS library to connect to mongodb database
const mongoose = require("mongoose");

//JS library to retrieve dotenv variables
const dotenv = require("dotenv");

const express = require("express");
//is similar to a function that allows the creation of a server to run the app.

const cookieParser = require("cookie-parser");

const cors = require("cors");

dotenv.config();

const app = express();

//server is a program that listens to http requests (which is local at start)

//Ports are represented by numbers that range from 0 to 65535, the most that will fit into a 16-bit unsigned integer.
//Some of those numbers are associated with particular types of services. Ports 0 to 1024 are called well-known ports, and are conventionally associated with the most common types of network service. Web servers use port 80, SSH servers use port 22, and so on.
const PORT = process.env.PORT || 5000;
//creates environment for hosting ports

//tell the express app to listen to requests from PORT aka port 5000
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:3000"], 
  credentials: true,
}));

// connect to mongodb

mongoose.connect(
  process.env.MDB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

// set up routes

app.use("/auth", require("./routers/userRouter"));
app.use("/customer", require("./routers/customerRouter"));