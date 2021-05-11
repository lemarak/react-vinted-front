import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ offer, totalTransaction }) => {
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElements = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElements, {
        name: offer.owner._id,
      });
      console.log("Stripe Response", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      const amount = (totalTransaction * 100).toFixed(0);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: offer.product_name,
          amount: amount,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
        window.alert("Paiement effectué");
        history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Payer</button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
