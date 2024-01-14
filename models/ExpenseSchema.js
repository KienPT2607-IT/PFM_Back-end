const { default: Schema, model } = require("mongoose");

var ExpenseSchema = Schema({
	creator_id: {
		type: SchemaTypes.ObjectId,
		ref: "users",
	},
	family_id: {
		type: SchemaTypes.ObjectId,
		ref: "families",
	},
	amount: {
		type: Number,
		min: 0,
	},
	image: String,
	category_id: {
		type: SchemaTypes.ObjectId,
		ref: "categories",
	},
	description: {
		type: String,
		minLength: 0,
	},
	created_at: Date,
});

var ExpenseModel = model("expenses", ExpenseSchema);
module.exports = ExpenseModel;
