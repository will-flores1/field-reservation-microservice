class SoccerField implements SoccerFieldT {
	id: number;
	name: string;
	location: string;
	capacity: number;
	price: number;
	size: number;

	constructor(id, name, location, capacity, price, size) {
		this.id = id;
		this.name = name;
		this.location = location;
		this.capacity = capacity;
		this.price = price;
		this.size = size;
	}
}

export default SoccerField;
