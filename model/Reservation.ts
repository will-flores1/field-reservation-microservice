class Reservation implements ReservationT {
	id: number;
	date: string;
	startTime: string;
	endTime: string;
	soccerField: SoccerFieldT;
	price: number;
	customer: CustomerT;

	constructor(id, soccerField, date, startTime, endTime, price, customer) {
		this.id = id;
		this.date = date;
		this.startTime = startTime;
		this.endTime = endTime;
		this.soccerField = soccerField;
		this.price = price;
		this.customer = customer;
	}
}

export default Reservation;
