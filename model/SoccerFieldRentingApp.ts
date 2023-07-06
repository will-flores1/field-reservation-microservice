class SoccerFieldRentingApp implements SoccerFieldRentingAppT {
	_soccerFields: SoccerFieldT[];
	_reservations: ReservationT[];
	_customers: CustomerT[];

	constructor(soccerFields = [], reservations = [], customers = []) {
		this._soccerFields = soccerFields;
		this._reservations = reservations;
		this._customers = customers;
	}

	addFields(soccerField: SoccerFieldT[]) {
		if (!soccerField) return;
		soccerField.forEach((soccerField) => {
			this._soccerFields.push(soccerField);
		});
	}

	addReservation(reservation: ReservationT[]) {
		if (!reservation) return;

		reservation.forEach((res) => {
			this._reservations.push(res);
		});
	}

	addCustomer(customer: CustomerT[]) {
		if (!customer) return;

		customer.forEach((customer) => {
			this._customers.push(customer);
		});
	}

	getAvailableSoccerFields(date, startTime, endTime) {}
}

export default SoccerFieldRentingApp;
