import Reservation from "../model/Reservation.js";
import app1 from "./index.js";

/*
	---------- RESERVATION WORKFLOW ----------
*/

// Get all available time slots
const timeslots = app1.getAvailableTimeSlots();
// console.log(timeslots);

// Select a time slot
const selectedTimeSlot = timeslots[0];
console.log(selectedTimeSlot);

// Get available fields for selected time slot
const b = app1.getAvailableFieldsByDate(
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"]
);
// b.map((b) => console.log(b["name"]));

// Reserve a field
app1.createReservation(
	10,
	3,
	new Date().toLocaleString(),
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"],
	1
);

console.log("\n");

// Check if field was reserved
const z = app1.getAvailableFieldsByDate(
	selectedTimeSlot["startTime"],
	selectedTimeSlot["endTime"]
);
z.map((z) => console.log(z["name"]));
