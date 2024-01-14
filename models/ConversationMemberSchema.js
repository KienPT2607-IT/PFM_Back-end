const { default: Schema, SchemaTypes, model } = require("mongoose");

var ConversationMemberSchema = Schema({
	user_id: {
		type: SchemaTypes.ObjectId,
		ref: "users",
	},
	conversation_id: {
		type: SchemaTypes.ObjectId,
		ref: "conversations",
	},
	joined_at: Date,
});

var ConversationMemberModel = model(
	"conversation_members",
	ConversationMemberSchema
);
module.exports = ConversationMemberModel;
