import SoccerField from "../models/soccerFieldSchema.js";
import Reservation from "../models/reservationSchema.js";

function populatedbfield() {
	const soccerField1 = new SoccerField({
		id: 1,
		name: "Field 1",
		location: "Location 1",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField2 = new SoccerField({
		id: 2,
		name: "Field 2",
		location: "Location 2",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField3 = new SoccerField({
		id: 3,
		name: "Field 3",
		location: "Location 3",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField5 = new SoccerField({
		id: 5,
		name: "Field 5",
		location: "Location 5",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField6 = new SoccerField({
		id: 6,
		name: "Field 6",
		location: "Location 6",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField4 = new SoccerField({
		id: 4,
		name: "Field 4",
		location: "Location 4",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField7 = new SoccerField({
		id: 7,
		name: "Field 7",
		location: "Location 7",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField8 = new SoccerField({
		id: 8,
		name: "Field 8",
		location: "Location 8",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField9 = new SoccerField({
		id: 9,
		name: "Field 9",
		location: "Location 9",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});
	const soccerField10 = new SoccerField({
		id: 10,
		name: "Field 10",
		location: "Location 10",
		capacity: 12,
		price: 100,
		reservedTimeslots: [],
	});

	soccerField1.save();
	soccerField2.save();
	soccerField3.save();
	soccerField4.save();
	soccerField5.save();
	soccerField6.save();
	soccerField7.save();
	soccerField8.save();
	soccerField9.save();
	soccerField10.save();
}

function populatedb() {
	const reservation1 = new Reservation({
		id: 1,
		soccerFieldID: 1,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation2 = new Reservation({
		id: 2,
		soccerFieldID: 2,
		date: "7/7/2023, 8:04:58 AM",
		startTime: "7/8/2023, 8:00:00 AM",
		endTime: "7/8/2023, 9:00:00 AM",
		price: 120,
		customerID: 2,
	});
	const reservation3 = new Reservation({
		id: 3,
		soccerFieldID: 3,
		date: "7/8/2023, 8:00:00 AM",
		startTime: "7/8/2023, 11:00:00 AM",
		endTime: "7/8/2023, 12:00:00 PM",
		price: 120,
		customerID: 3,
	});

	const reservation4 = new Reservation({
		id: 4,
		soccerFieldID: 2,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});

	const reservation5 = new Reservation({
		id: 5,
		soccerFieldID: 3,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});

	const reservation6 = new Reservation({
		id: 6,
		soccerFieldID: 4,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation7 = new Reservation({
		id: 7,
		soccerFieldID: 5,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation8 = new Reservation({
		id: 8,
		soccerFieldID: 6,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation9 = new Reservation({
		id: 9,
		soccerFieldID: 7,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation10 = new Reservation({
		id: 10,
		soccerFieldID: 8,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation11 = new Reservation({
		id: 11,
		soccerFieldID: 9,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});
	const reservation12 = new Reservation({
		id: 12,
		soccerFieldID: 10,
		date: "7/8/2023, 4:04:58 AM",
		startTime: "7/8/2023, 5:00:00 PM",
		endTime: "7/8/2023, 6:00:00 PM",
		price: 120,
		customerID: 1,
	});

	try {
		reservation1.save();
		reservation2.save();
		reservation3.save();
		reservation4.save();
		reservation5.save();
		reservation6.save();
		reservation7.save();
		reservation8.save();
		reservation9.save();
		reservation10.save();
		reservation11.save();
		reservation12.save();
	} catch (err) {
		console.log(err);
	}
}

export { populatedb, populatedbfield };
