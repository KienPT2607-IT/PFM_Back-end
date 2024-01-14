var mongoose = require("mongoose");

var UserFriendSchema = mongoose.Schema({
	user_one: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "users",
	},
	user_two: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "users",
	},
	created_at: {
		type: Date,
	},
});

var UserFriendModel = mongoose.model("user_friends", UserFriendSchema);
module.exports = UserFriendModel;
