const { default: Schema, model } = require("mongoose");

var MessageSchema = Schema({
	sender_id: {
		type: SchemaTypes.ObjectId,
		ref: "users",
	},
	conversation_id: {
		type: SchemaTypes.ObjectId,
		ref: "conversations",
	},
	message: {
		type: String,
		minLength: 0,
	},
	image: String,
	sent_at: Date,
});

var MessageModel = model("messages", MessageSchema);
module.exports = MessageModel;
