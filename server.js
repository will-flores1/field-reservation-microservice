// start express server
import express from "express";
import bodyParser from "body-parser";
import app1 from "./dist/index.js";

const app = express();
const myLogger = function (req, res, next) {
	console.log("Request: " + req);
	console.log("Request Method: " + req.method);
	console.log("Request date: " + new Date());

	next(); // THIS IS IMPORTANT!
};

app.use(myLogger);

app.get("/", (req, res) => {
	res.send(app1);
});

app.listen(3000, () => {
	console.log("server started");
});
