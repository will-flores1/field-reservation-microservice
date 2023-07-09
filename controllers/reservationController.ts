import { Request, Response } from "express";

import Reservation from "../models/reservationSchema.js";

const createReservation = async (req: Request, res: Response) => {
	const { soccerFieldID, date, startTime, endTime, price, customerID } =
		req.body;

	if (!soccerFieldID || !startTime || !endTime || !customerID) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	const reservation = new Reservation({
		id: 20,
		soccerFieldID: soccerFieldID,
		date: date,
		startTime: startTime,
		endTime: endTime,
		price: price,
		customerID: customerID,
	});

	try {
		const newReservation = await reservation.save();
		res.status(201).json(newReservation);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export default createReservation;
