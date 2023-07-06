import SoccerFieldRentingApp from "./model/SoccerFieldRentingApp.js";
import SoccerField from "./model/SoccerField.js";
import Customer from "./model/Customer.js";
import Reservation from "./model/Reservation.js";
// Create objects
const soccerField1 = new SoccerField(1, "1", "Location 1", 12, 100, 12);
const soccerField2 = new SoccerField(2, "2", "Location 2", 12, 100, 12);
const soccerField3 = new SoccerField(3, "3", "Location 3", 12, 100, 12);
const soccerField5 = new SoccerField(5, "5", "Location 5", 12, 100, 12);
const soccerField6 = new SoccerField(6, "6", "Location 6", 12, 100, 12);
const soccerField4 = new SoccerField(4, "4", "Location 4", 12, 100, 12);
const soccerField7 = new SoccerField(7, "7", "Location 7", 12, 100, 12);
const soccerField8 = new SoccerField(8, "8", "Location 8", 12, 100, 12);
const soccerField9 = new SoccerField(9, "9", "Location 9", 12, 100, 12);
const soccerField10 = new SoccerField(10, "10", "Location 10", 12, 100, 10);
const customer1 = new Customer(1, "Customer 1", "Address 1", "Phone 1", "Email 1", "Password 1");
const customer2 = new Customer(2, "Customer 2", "Address 2", "Phone 2", "Email 2", "Password 2");
const customer3 = new Customer(3, "Customer 3", "Address 3", "Phone 3", "Email 3", "Password 3");
const reservation1 = new Reservation(1, soccerField1, "Date 1", "Start Time 1", "End Time 1", 120, customer1);
const reservation2 = new Reservation(2, soccerField2, "Date 2", "Start Time 2", "End Time 2", 120, customer2);
const reservation3 = new Reservation(3, soccerField3, "Date 3", "Start Time 3", "End Time 3", 120, customer3);
// Add objects to arrays
const fields = [
    soccerField1,
    soccerField2,
    soccerField3,
    soccerField4,
    soccerField5,
    soccerField6,
    soccerField7,
    soccerField8,
    soccerField9,
    soccerField10,
];
const customers = [customer1, customer2, customer3];
const reservations = [reservation1, reservation2, reservation3];
const app1 = new SoccerFieldRentingApp();
app1.addFields(fields);
app1.addCustomer(customers);
app1.addReservation(reservations);
console.log(app1);
export default app1;
//# sourceMappingURL=index.js.map