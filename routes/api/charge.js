const router = require("express").Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/", async (req, res) => {
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

module.exports = router;
