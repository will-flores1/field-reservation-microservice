import { Request, Response } from "express";
import User from "../models/userSchema.js";

const createUser = async (req: Request, res: Response) => {
	const { name, password } = req.body;

	if (!name || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	const user = new User({
		name: name,
		password: password,
	});

	try {
		const newUser = await user.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export default createUser;
