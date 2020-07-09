import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import API from "../../utils/API";
import app from "../../Base";
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
  const [ref, setRef] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [userId, setUserId] = useState();
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        API.getUserInfo(user.uid).then(({ data }) => {
          if (data) {
            setUserId(data.id);
          } else {
            return
          }
        });
      }
    });
  }, []);
  
  
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
          amount: 1199,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            props.response(response.data);
            axios.put("/api/users/"+ userId, {type: "Full"})
            alert("Payment Successful");
            window.location.replace("http://localhost:3000/home")
          } else {
            props.response("payment failed: "+response.data);
            alert(response.data)
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
    <h1 className=" head text-center">Payment Information</h1>
    <h3 className="text-center"> Manage unlimited projects for $11.99/mo!</h3>
    <br />
    <form onSubmit={handleSubmit} style={styles.formStyle}>
      <div className="form-group"> 
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
function Checkout({ currentUser, LocalId }) {
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
    
  }, []);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm response={(msg) => setStatus(msg)} />
      <FormMsg  />
    </Elements>
    
  );
}

export default withRouter(Checkout);
