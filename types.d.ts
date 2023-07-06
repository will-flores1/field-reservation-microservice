interface SoccerFieldRentingAppT {
	_soccerFields: SoccerFieldT[];
	_reservations: ReservationT[];
	_customers: CustomerT[];
	addFields(soccerField: SoccerFieldT[]): void;
	addReservation(reservation: ReservationT[]): void;
	addCustomer(customer: CustomerT[]): void;
	getAvailableSoccerFields(
		date: string,
		startTime: string,
		endTime: string
	): SoccerFieldT[] | void;
}

interface SoccerFieldT {
	id: number;
	name: string;
	location: string;
	price: number;
	size: number;
}

interface CustomerT {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
	password: string;
}

interface ReservationT {
	id: number;
	date: string;
	startTime: string;
	endTime: string;
	soccerField: SoccerFieldT;
	price: number;
	customer: CustomerT;
}
