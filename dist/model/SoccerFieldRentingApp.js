class SoccerFieldRentingApp {
    constructor(soccerFields = [], reservations = [], customers = []) {
        this._soccerFields = soccerFields;
        this._reservations = reservations;
        this._customers = customers;
    }
    addFields(soccerField) {
        if (!soccerField)
            return;
        soccerField.forEach((soccerField) => {
            this._soccerFields.push(soccerField);
        });
    }
    addReservation(reservation) {
        if (!reservation)
            return;
        reservation.forEach((res) => {
            this._reservations.push(res);
        });
    }
    addCustomer(customer) {
        if (!customer)
            return;
        customer.forEach((customer) => {
            this._customers.push(customer);
        });
    }
    getAvailableSoccerFields(date, startTime, endTime) { }
}
export default SoccerFieldRentingApp;
//# sourceMappingURL=SoccerFieldRentingApp.js.map