import Customer from "../models/Customer.js";
import Reservation from "../models/Reservation.js";

class SoccerFieldRentingApp implements SoccerFieldRentingAppT {
	_soccerFields: SoccerFieldT[];
	_reservations: ReservationT[];
	_customers: CustomerT[];
	_timeslots: { startTime: string; endTime: string }[];

	constructor(soccerFields = [], reservations = [], customers = []) {
		this._soccerFields = soccerFields;
		this._reservations = reservations;
		this._customers = customers;
		this._timeslots = this.calculateTimeSlots(
			"7/8/2023",
			"8:00 AM",
			"11:00 PM",
			60 * 60 * 1000
		);
	}

	addFields(soccerField: SoccerFieldT) {
		if (!soccerField) return;
		this._soccerFields.push(soccerField);
	}

	addReservation(reservation: ReservationT) {
		if (!reservation) return;
		this._reservations.push(reservation);
		//get the soccer field by id
		const soccerField = this._soccerFields.find(
			(field) => field.id === reservation.soccerFieldID
		);
		soccerField.addReservedTimeSlot(reservation.startTime, reservation.endTime);
	}

	addCustomer(customer: CustomerT) {
		if (!customer) return;
		this._customers.push(customer);
	}

	createReservation(id, soccerField, date, startTime, endTime, customerID) {
		const reservation = new Reservation(
			id,
			soccerField,
			date,
			startTime,
			endTime,
			soccerField.price,
			customerID
		);
		this.addReservation(reservation);
	}

	createCustomer(id, name, address, phone, email, password) {
		const customer = new Customer(id, name, address, phone, email, password);
		this.addCustomer(customer);
	}

	getCustomerReservations(customerID) {
		const customerReservations = [];
		// get customer by id
		for (const reservation of this._reservations) {
			if (reservation.customerID === customerID) {
				customerReservations.push(reservation);
			}
		}
		return customerReservations;
	}

	getAvailableTimeSlots() {
		// Iterate through timeslots
		// Get available fields for each timeslot
		// If no available fields, remove from availableTimeslots array

		const availableTimeSlots = [];
		for (const timeslot of this._timeslots) {
			const availableFields = this.getAvailableFieldsByDate(
				timeslot.startTime,
				timeslot.endTime
			);
			if (availableFields.length) {
				availableTimeSlots.push(timeslot);
			} else {
				console.log(
					`No available fields for ${timeslot.startTime} - ${timeslot.endTime}`
				);
			}
		}
		return availableTimeSlots;
	}

	getAvailableFieldsByDate(startTime, endTime) {
		const availableFields = [];
		for (const soccerField of this._soccerFields) {
			if (soccerField.reservedTimeslots.length === 0) {
				availableFields.push(soccerField);
			} else if (soccerField.isAvailable(startTime, endTime)) {
				availableFields.push(soccerField);
			}
		}
		return availableFields;
	}

	deleteReservation(reservationID) {
		const reservation = this._reservations.find(
			(reservation) => reservation.id === reservationID
		);
		const soccerField = this._soccerFields.find(
			(field) => field.id === reservation.soccerFieldID
		);
		soccerField.removeReservedTimeSlot(
			reservation.startTime,
			reservation.endTime
		);
		this._reservations = this._reservations.filter(
			(reservation) => reservation.id !== reservationID
		);
		return reservation;
	}

	calculateTimeSlots(currentDate, startTime, endTime, slotDuration) {
		const timeSlots = [];

		// Convert the current date and time strings to JavaScript Date objects
		const startDate = new Date(currentDate + " " + startTime);
		const endDate = new Date(currentDate + " " + endTime);

		// Loop through the time slots
		let currentTime = new Date(startDate);
		while (currentTime < endDate) {
			// Create the start and end time for the current slot
			const startTime = new Date(currentTime);
			const endTime = new Date(currentTime.getTime() + slotDuration);

			// Format the start and end time strings
			const formattedStartTime = startTime.toLocaleString();
			const formattedEndTime = endTime.toLocaleString();

			// Add the time slot to the array
			timeSlots.push({
				startTime: formattedStartTime,
				endTime: formattedEndTime,
			});

			// Move to the next slot
			currentTime.setTime(currentTime.getTime() + slotDuration);
		}

		return timeSlots;
	}
}

export default SoccerFieldRentingApp;
