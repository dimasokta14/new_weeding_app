var { Router } = require("express");
var EmailSubscriptionModel = require("../../models/Subscription");

const router = Router();

router.post("/", async (req, res) => {
	const { email } = req.body;
	const newsubscription = new EmailSubscriptionModel({
		email,
	});
	try {
		const emailsubs = await newsubscription.save();
		if (!emailsubs) throw Error("Something went wrong");
		res.status(200).json(emailsubs);
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
});
