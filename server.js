var express = require("express");
const stripe = require("stripe")(
  "sk_test_51GrsxpDr6Z4R7UKU64WSwPlj2vwYMFmnZbNENtahng8CXC02OTfg99WFNRcaKTPOzA5sSDCgOvPVW1Fqczw94SSh00IqMLH76n"
);
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
    res.status(200).end();
  } catch (error) {
    console.log(error.raw.message);
    res.status(500).send(error.raw.message);
  }
});
app.listen(PORT, () => {
  console.log(`listning on Port ${PORT}`);
});
