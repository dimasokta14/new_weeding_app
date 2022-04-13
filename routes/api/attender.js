// import { Router } from "express";
var { Router } = require("express");
// Attender Model
// import Attenders from "../../models/attenders";
var Attenders = require("../../models/Attenders");

const router = Router();

/**
 * @route   GET api/attenderss
 * @desc    Get All attenderss
 * @access  Public
 */

router.get("/", async (req, res) => {
	try {
		const attenders = await Attenders.find();
		if (!attenders) throw Error("No attenderss");
		res.status(200).json(attenders);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
});

/**
 * @route   POST api/attenderss
 * @desc    Create An attenders
 * @access  Private
 */

router.post("/", async (req, res) => {
	const { name, phone, num_attend, greet, status } = req.body;
	const newattenders = new Attenders({
		name,
		phone,
		num_attend,
		greet,
		status,
	});

	try {
		const attenders = await newattenders.save();
		if (!attenders) throw Error("Something went wrong saving the attenders");

		res.status(200).json(attenders);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
});

/**
 * @route   DELETE api/attenderss/:id
 * @desc    Delete A attenders
 * @access  Private
 */

router.delete("/:id", async (req, res) => {
	try {
		const attenders = await Attenders.findById(req.params.id);
		if (!attenders) throw Error("No attenders found");

		const removed = await Attenders.remove();
		if (!removed)
			throw Error("Something went wrong while trying to delete the attenders");

		res.status(200).json({ success: true });
	} catch (e) {
		res.status(400).json({ msg: e.message, success: false });
	}
});

module.exports = router;
