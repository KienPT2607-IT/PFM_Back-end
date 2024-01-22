var express = require("express");
var router = express.Router();
const UserModel = require("../models/UserSchema");

// * Login: "localhost:3000/users/login"
router.get("/login", async (req, res) => {
	try {
		console.log("Looking for user: " + req.body.username);
		let user = await UserModel.find({
			username: req.body.username,
			password: req.body.password,
		});
		if (user != null) {
			// user != null
			console.log("Found user: " + user.username);
			res.status(200).send(req.body.username + " logged in successfully");
		} else {
			console.log("Username: " + req.body.username + " not found");
			res.status(200).send("Username: ${req.body.username} not found");
		}
	} catch (error) {
		res.status(400).send("Account not found" + error);
	}
});

// * Login: "localhost:3000/users/register"
router.post("/register", async (req, res) => {
	try {
		let user = req.body;
		console.log("Creating user: ${user}");
		await UserModel.create(user);
		console.log("User created successfully");
		res.send("Added user successfully");
	} catch (error) {
		console.error("Error during registration: ", error);
		res.status(400).send("Failed to register! " + error);
	}
});

module.exports = router;
