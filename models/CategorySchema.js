const { default: Schema, model } = require("mongoose");

var CategorySchema = Schema({
	name: {
		type: String,
		minLength: 0,
	},
	icon: String,
});

var CategoryModel = model("categories", CategorySchema);
module.exports = CategoryModel;
