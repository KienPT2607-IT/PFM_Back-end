const { default: Schema, model } = require("mongoose");

var ConversationSchema = Schema({
	type: String,
	created_at: Date,
	is_active: Boolean,
});

var ConversationModel = model("conversations", ConversationSchema);
module.exports = ConversationModel;
