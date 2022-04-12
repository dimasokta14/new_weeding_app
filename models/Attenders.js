import { Schema, model } from "mongoose";

// Create Schema
const AttendersSchema = new Schema({
	// name: {
	// 	type: String,
	// 	required: true,
	// },
	// date: {
	// 	type: Date,
	// 	default: Date.now,
	// },
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	num_attend: {
		type: Number,
		required: true,
	},
	greet: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	date: { type: Date, default: Date.now },
});

const Attenders = model("attenders", AttendersSchema);

export default Attenders;
