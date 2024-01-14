const { default: SchemaTypes, model, Schema } = require("mongoose");

var DebtSchema = Schema({
	creditor_id: {
		type: SchemaTypes.ObjectId,
		ref: "users",
	},
	debtor_id: {
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
	is_repaid: Boolean,
	created_at: Date,
	description: {
		type: String,
		minLength: 0,
	},
});

var DebtModel = model("debts", DebtSchema);
module.exports = DebtModel;
