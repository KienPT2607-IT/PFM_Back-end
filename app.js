var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//1. config mongoose library (connect and work with database)
//1A. import library
var mongoose = require("mongoose");

// Define router path
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// * 1B. set mongodb connection string
//Note 1: "pfm" is database name
var database = "mongodb://localhost:27017/pfm";
mongoose
	.connect(database)
	.then(() => console.log("Successfully connected to DB"))
	.catch((err) => console.log("Connect to DB failed: " + err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// * Declare URL of router
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
