const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
	"sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF"
);

//API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	console.log("Payment Request Recieved BOOM!! for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, //subunits of the currency
		currency: "usd",
	});

	console.log("Payment Intent", paymentIntent);
	// OK - Created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-b928a/us-central1/api
