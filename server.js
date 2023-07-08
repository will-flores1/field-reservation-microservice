// start express server
import express from "express";
import app1 from "./dist/controller/main.js";

const app = express();
const myLogger = function (req, res, next) {
	console.log("Request: " + req.url);
	console.log("Request Method: " + req.method);
	console.log("Request date: " + new Date());

	next(); // THIS IS IMPORTANT!
};

app.use(myLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	return res.status(200).send("Welcome to Express");
});

app.post("/", (req, res) => {
	res.status(201).json(req.body);
});

app.listen(3000, () => {
	console.log("server started");
});
