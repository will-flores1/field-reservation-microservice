class Reservation implements ReservationT {
	id: number;
	date: string;
	startTime: string;
	endTime: string;
	soccerFieldID: number;
	price: number;
	customerID: number;

	constructor(id, soccerFieldID, date, startTime, endTime, price, customerID) {
		this.id = id;
		this.date = new Date().toLocaleString();
		this.startTime = startTime;
		this.endTime = endTime;
		this.soccerFieldID = soccerFieldID;
		this.price = price;
		this.customerID = customerID;
	}
}

export default Reservation;
