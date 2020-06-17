var express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.static("public"));
// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post("/charge", async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "kids Card",
      payment_method: id,
      confirm: true,
    });
    console.log(`payment ${payment}`);
    res.send("success");
  } catch (error) {
    res.send(error.raw.message);
  }
});
app.listen(PORT, () => {
  console.log(`listning on Port ${PORT}`);
});
