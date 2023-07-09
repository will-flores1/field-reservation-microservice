interface SoccerFieldRentingAppT {
	_soccerFields: SoccerFieldT[];
	_reservations: ReservationT[];
	_customers: CustomerT[];
	_timeslots: { startTime: string; endTime: string }[];
}

interface SoccerFieldT {
	id: number;
	name: string;
	location: string;
	price: number;
	capacity: number;
	reservedTimeslots: { startTime: string; endTime: string }[];
	isAvailable: (startTime: string, endTime: string) => boolean;
	addReservedTimeSlot: (startTime: string, endTime: string) => void;
	removeReservedTimeSlot: (startTime: string, endTime: string) => void;
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
	soccerFieldID: number;
	price: number;
	customerID: number;
}
