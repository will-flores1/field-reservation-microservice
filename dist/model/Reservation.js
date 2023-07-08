class Reservation {
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
//# sourceMappingURL=Reservation.js.map