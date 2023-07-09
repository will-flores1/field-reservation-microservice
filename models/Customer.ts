class Customer implements CustomerT {
	id: number;
	name: string;
	address: string;
	phone: string;
	email: string;
	password: string;

	constructor(id, name, address, phone, email, password) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.password = password;
	}
}

export default Customer;
