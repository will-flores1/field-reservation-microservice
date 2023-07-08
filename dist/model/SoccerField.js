class SoccerField {
    constructor(id, name, location, capacity, price, size) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.capacity = capacity;
        this.price = price;
        this.size = size;
        this.reservedTimeslots = [];
    }
    isAvailable(startTime, endTime) {
        for (let i = 0; i < this.reservedTimeslots.length; i++) {
            if (this.reservedTimeslots[i].startTime === startTime &&
                this.reservedTimeslots[i].endTime === endTime) {
                return false;
            }
        }
        return true;
    }
    addReservedTimeSlot(startTime, endTime) {
        this.reservedTimeslots.push({ startTime, endTime });
    }
}
export default SoccerField;
//# sourceMappingURL=SoccerField.js.map