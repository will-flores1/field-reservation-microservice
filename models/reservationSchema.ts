import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	date: { type: String, required: true },
	startTime: { type: String, required: true },
	endTime: { type: String, required: true },
	soccerFieldID: {
		type: Number,
		required: true,
	},
	price: { type: Number, required: true },
	customerID: {
		type: Number,
		required: true,
	},
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
