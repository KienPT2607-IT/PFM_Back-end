var mongoose = require("mongoose");

var FamilySchema = mongoose.Schema({
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
	status: Boolean,
});

var FamilyModel = mongoose.model("families", FamilySchema);
module.exports = FamilyModel;
