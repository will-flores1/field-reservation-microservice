class SoccerField implements SoccerFieldT {
	id: number;
	name: string;
	location: string;
	capacity: number;
	price: number;
	reservedTimeslots: { startTime: string; endTime: string }[];

	constructor(id, name, location, capacity, price) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.capacity = capacity;
		this.price = price;

		this.reservedTimeslots = [];
	}

	isAvailable(startTime, endTime) {
		for (let i = 0; i < this.reservedTimeslots.length; i++) {
			if (
				this.reservedTimeslots[i].startTime === startTime &&
				this.reservedTimeslots[i].endTime === endTime
			) {
				return false;
			}
		}
		return true;
	}

	addReservedTimeSlot(startTime, endTime) {
		this.reservedTimeslots.push({ startTime, endTime });
	}

	removeReservedTimeSlot(startTime, endTime) {
		for (let i = 0; i < this.reservedTimeslots.length; i++) {
			if (
				this.reservedTimeslots[i].startTime === startTime &&
				this.reservedTimeslots[i].endTime === endTime
			) {
				this.reservedTimeslots.splice(i, 1);
			}
		}
	}
}

export default SoccerField;
