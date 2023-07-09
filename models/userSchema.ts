import mongoose from "mongoose";

// Define a schema
const userSchema = new mongoose.Schema({
	// id: {
	// 	type: Number,
	// 	required: true,
	// },
	name: {
		type: String,
		required: true,
	},
	// age: {
	// 	type: Number,
	// 	min: 18,
	// 	max: 100,
	// },
	// address: {
	// 	type: String,
	// 	required: true,
	// },
	// phone: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	// email: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	password: {
		type: String,
		required: true,
	},
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Export the model to be used in other parts of your application
export default User;
