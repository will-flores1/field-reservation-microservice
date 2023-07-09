// start express server
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import createUser from "./controllers/userController.js";
import createReservation from "./controllers/reservationController.js";
import { populatedbfield, populatedb } from "./controllers/populatedb.js";
dotenv.config({ path: "../.env" });

// populatedb();
// populatedbfield();

const port = process.env.PORT || 3000;

connectDB();

const app = express();
const myLogger = function (req, res, next) {
	console.log("Request: " + req.url);
	console.log("Request Method: " + req.method);
	console.log("Request date: " + new Date());

	next(); // THIS IS IMPORTANT!
};
dotenv.config();

app.use(myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	return res.status(200).send("Welcome to Express");
});

app.post("/", (req, res) => {
	res.status(201).json(req.body);
});

app.post("/register", createUser);

app.post("/reserve", createReservation);

app.listen(port, () => {
	console.log("server started", port);
});
