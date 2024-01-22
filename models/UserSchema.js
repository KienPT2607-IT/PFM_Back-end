var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone_number: {
		type: String,
		unique: true,
		required: true,
	},
	email: {
		type: String,
		unique: true,
	},
	first_name: {
		type: String,
	},
	last_name: {
		type: String,
	},
	gender: {
		type: Boolean,
	},
	dob: {
		type: Date,
	},
	profile_picture: {
		type: String,
	},
	cover_picture: {
		type: String,
	},
	created_at: {
		type: Date,
	},
	is_active: {
		type: Boolean,
	},
	family_id: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "families",
	},
});

var UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;