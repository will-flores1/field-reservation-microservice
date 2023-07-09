import SoccerFieldRentingApp from "./SoccerFieldRentingApp.js";
import SoccerField from "../models/SoccerField.js";
import Customer from "../models/Customer.js";
import Reservation from "../models/Reservation.js";

// Create objects
const soccerField1 = new SoccerField(1, "Field 1", "Location 1", 12, 100);
const soccerField2 = new SoccerField(2, "Field 2", "Location 2", 12, 100);
const soccerField3 = new SoccerField(3, "Field 3", "Location 3", 12, 100);
const soccerField5 = new SoccerField(5, "Field 5", "Location 5", 12, 100);
const soccerField6 = new SoccerField(6, "Field 6", "Location 6", 12, 100);
const soccerField4 = new SoccerField(4, "Field 4", "Location 4", 12, 100);
const soccerField7 = new SoccerField(7, "Field 7", "Location 7", 12, 100);
const soccerField8 = new SoccerField(8, "Field 8", "Location 8", 12, 100);
const soccerField9 = new SoccerField(9, "Field 9", "Location 9", 12, 100);
const soccerField10 = new SoccerField(10, "Field 10", "Location 10", 12, 100);

const customer1 = new Customer(
	1,
	"Customer 1",
	"Address 1",
	"Phone 1",
	"Email 1",
	"Password 1"
);
const customer2 = new Customer(
	2,
	"Customer 2",
	"Address 2",
	"Phone 2",
	"Email 2",
	"Password 2"
);
const customer3 = new Customer(
	3,
	"Customer 3",
	"Address 3",
	"Phone 3",
	"Email 3",
	"Password 3"
);

const reservation1 = new Reservation(
	1,
	1,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation2 = new Reservation(
	2,
	2,
	"7/7/2023, 8:04:58 AM",
	"7/8/2023, 8:00:00 AM",
	"7/8/2023, 9:00:00 AM",
	120,
	2
);
const reservation3 = new Reservation(
	3,
	3,
	"7/8/2023, 8:00:00 AM",
	"7/8/2023, 11:00:00 AM",
	"7/8/2023, 12:00:00 PM",
	120,
	3
);

const reservation4 = new Reservation(
	4,
	2,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);

const reservation5 = new Reservation(
	5,
	3,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);

const reservation6 = new Reservation(
	6,
	4,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation7 = new Reservation(
	7,
	5,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation8 = new Reservation(
	8,
	6,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation9 = new Reservation(
	9,
	7,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation10 = new Reservation(
	10,
	8,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation11 = new Reservation(
	11,
	9,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);
const reservation12 = new Reservation(
	12,
	10,
	"7/8/2023, 4:04:58 AM",
	"7/8/2023, 5:00:00 PM",
	"7/8/2023, 6:00:00 PM",
	120,
	1
);

const app1 = new SoccerFieldRentingApp();

app1.addFields(soccerField1);
app1.addFields(soccerField2);
app1.addFields(soccerField3);
app1.addFields(soccerField4);
app1.addFields(soccerField5);
app1.addFields(soccerField6);
app1.addFields(soccerField7);
app1.addFields(soccerField8);
app1.addFields(soccerField9);
app1.addFields(soccerField10);

app1.addCustomer(customer1);
app1.addCustomer(customer2);
app1.addCustomer(customer3);

app1.addReservation(reservation1);
app1.addReservation(reservation2);
app1.addReservation(reservation3);

app1.addReservation(reservation4);
app1.addReservation(reservation5);
app1.addReservation(reservation6);
app1.addReservation(reservation7);
app1.addReservation(reservation8);
app1.addReservation(reservation9);
app1.addReservation(reservation10);
app1.addReservation(reservation11);
app1.addReservation(reservation12);

export default app1;
