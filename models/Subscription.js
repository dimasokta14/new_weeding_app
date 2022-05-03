var { Schema, model } = require("mongoose");

const SubscriptionSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
});

module.exports = model("email-subscription", SubscriptionSchema);
