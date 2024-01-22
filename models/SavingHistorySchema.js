const { default: mongoose, Schema, model } = require("mongoose");

var SavingHistorySchema = Schema({
	saving_id: {
		type: SchemaTypes.ObjectId,
		ref: "saving_goals",
	},
	amount: {
		type: Number,
		min: 0,
	},
	date: Date,
});

var SavingGoalHistoryModel = model("saving_histories", SavingHistorySchema);
module.exports = SavingGoalHistoryModel;
