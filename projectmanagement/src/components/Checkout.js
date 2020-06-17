import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
// require("dotenv").config();
// console.log(process.env.PUBLIC_KEY);
const styles = {
  formStyle: {
    marginTop: 20,
    maxWidth: 400,
    margin: "0 auto",
  },
};

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;
      console.log(id);
      try {
        const { data } = await axios.post("/charge", {
          id,
          amount: 19999,
        });
        console.log(data);
        props.success();
      } catch (err) {
        console.log(err);
        props.failed();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formStyle}>
      <h2>Price: $199.99</h2>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71hZZPRLxOL._AC_SX425_.jpg"
        alt="kids Car"
        style={{ width: "200px" }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
const stripePromise = loadStripe(
  "pk_test_51GrsxpDr6Z4R7UKUmoPXHW7swHORfQcKX7XO6D9GqXVuM1qn6m5ywhZmVmFzgxMYD6oHwkJqCneMr4oUXuIzixt4003qzTIOiD"
);

function Checkout() {
  const [status, setStatus] = React.useState("ready");

  if (status === "success") {
    return <div>Purchased</div>;
  } else if (status === "failed") {
    return <div>Failed</div>;
  }
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        success={() => setStatus("success")}
        failed={() => setStatus("failed")}
      />
    </Elements>
  );
}

export default Checkout;
