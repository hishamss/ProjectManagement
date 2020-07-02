import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import style from "./style.css";
// require("dotenv").config();
// console.log(process.env.PUBLIC_KEY);
const styles = {
  formStyle: {
    marginTop: 20,
    maxWidth: 600,
    margin: "0 auto",
  },
  
};

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: 'black',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
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
        .post("/api/charge/", {
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
    <div className="container">
    <div className="jumbotron tron">
    <form onSubmit={handleSubmit} style={styles.formStyle}>
      <div className="form-group">
        <h1 className=" head text-center">Payment Information</h1>
      <input type="text" placeholder="Name on Card" className="form-control" />
      </div>
      <div className="form-group">
      
      <input type="text" placeholder="Billing Address" className="form-control" />
      </div>
      <div className="form-group">
      <CardElement className="form-control" options={CARD_OPTIONS} onReady={(e) => setRef(e)} />
      </div>
      <button className= "btns" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
    </div>
  );
};
const stripePromise = loadStripe(
  "pk_test_51GrsxpDr6Z4R7UKUmoPXHW7swHORfQcKX7XO6D9GqXVuM1qn6m5ywhZmVmFzgxMYD6oHwkJqCneMr4oUXuIzixt4003qzTIOiD"
);

function FormMsg(props) {
  return <p>{props.msg}</p>;
}
function Checkout({ currentUser }) {
  const [status, setStatus] = React.useState("");
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm response={(msg) => setStatus(msg)} />
      <FormMsg msg={status} />
    </Elements>
    
  );
}

export default Checkout;
