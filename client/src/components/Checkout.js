import React from "react";
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
  // toclear the stripe form after submit
  const [ref, setRef] = React.useState(null);
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

      await axios
        .post("/api/charge", {
          id,
          amount: 19999,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            props.response(response.data);
          } else {
            props.response(response.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // toclear the stripe form after submit
    ref.clear();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formStyle}>
      <h2>Price: $199.99</h2>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71hZZPRLxOL._AC_SX425_.jpg"
        alt="kids Car"
        style={{ width: "200px" }}
      />
      <CardElement onReady={(e) => setRef(e)} />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
const stripePromise = loadStripe(
  "pk_test_51GrsxpDr6Z4R7UKUmoPXHW7swHORfQcKX7XO6D9GqXVuM1qn6m5ywhZmVmFzgxMYD6oHwkJqCneMr4oUXuIzixt4003qzTIOiD"
);

function FormMsg(props) {
  return <p>{props.msg}</p>;
}
function Checkout() {
  const [status, setStatus] = React.useState("");
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm response={(msg) => setStatus(msg)} />
      <FormMsg msg={status} />
    </Elements>
  );
}

export default Checkout;
