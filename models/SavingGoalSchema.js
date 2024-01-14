const { default: mongoose, Schema, model } = require("mongoose");

var SavingGoalSchema = Schema({
	name: {
		type: String,
		mingLength: 0,
	},
	creator_id: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "users",
	},
	target_amount: {
		type: Number,
		min: 0,
	},
	current_amount: {
		type: Number,
		min: 0,
	},
	recurring_contribution: {
		type: Number,
		min: 0,
	},
    type_of_contribution: String,
    created_at: Date,
    is_active: Boolean,
});

var SavingGoalModel = model("saving_goals", SavingGoalSchema);
module.exports = SavingGoalModel;