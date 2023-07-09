import express from "express";
import mongoose from "mongoose";

const soccerFieldSchema = new mongoose.Schema({
	id: { type: Number, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
	capacity: { type: String, required: true },
	price: { type: Number, required: true },
	reservedTimeslots: { type: Object, required: true },
});

const SoccerField = mongoose.model("SoccerField", soccerFieldSchema);

export default SoccerField;
