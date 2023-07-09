import app1 from "./index.js";

/*
	---------- RESERVATION WORKFLOW ----------
*/

// Get all available time slots
const timeslots = app1.getAvailableTimeSlots();

// Select a time slot
const selectedTimeSlot = timeslots[0];

// Get available fields for selected time slot
const b = app1.getAvailableFieldsByDate(
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"]
);

// Reserve a field
app1.createReservation(
	13,
	3,
	new Date().toLocaleString(),
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"],
	1
);

// Check if field was reserved
const z = app1.getAvailableFieldsByDate(
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"]
);
// console.log(z);

// Delete reservation and check if field is available again
app1.deleteReservation(6);
const f = app1.getAvailableFieldsByDate(
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM"
);
// console.log(f);

app1.createReservation(
	43,
	4,
	new Date().toLocaleString(),
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	1
);
