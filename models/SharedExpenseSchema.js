const { default: SchemaTypes, model, Schema } = require("mongoose");

var SharedExpenseSchema = Schema({
	user_id: {
		type: SchemaTypes.ObjectId,
		ref: "users",
	},
	expense_id: {
		type: SchemaTypes.ObjectId,
		ref: "expenses",
	},
	amount: {
		type: Number,
		min: 0,
	},
	is_repaid: Boolean,
});

var SharedExpenseModel = model("shared_expenses", SharedExpenseSchema);
module.exports = SharedExpenseModel;
