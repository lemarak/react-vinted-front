import { useLocation } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

console.log("KEY", process.env.PUBLIC_KEY_STRIPE);

const stripePromise = loadStripe(process.env.PUBLIC_KEY_STRIPE);
const Payment = () => {
  const location = useLocation();
  const { offer } = location.state;
  console.log(offer);
  //   Prices
  const protectionFees = Number(offer.product_price / 10);
  const shippingFees = protectionFees * 2;
  const totalTransaction = offer.product_price + protectionFees + shippingFees;

  return (
    <div className="payment-container">
      <div className="payment-block">
        <div className="payment-card">
          <div className="title">Résumé de la commande</div>
          {/* Summary */}
          <div className="content">
            <ul>
              <li>
                Commande <span>{Number(offer.product_price).toFixed(2)} €</span>
              </li>
              <li>
                Frais protection acheteurs{" "}
                <span>{protectionFees.toFixed(2)} €</span>
              </li>
              <li>
                Frais de port <span>{shippingFees.toFixed(2)} €</span>
              </li>
            </ul>
          </div>
          {/* Divider */}
          <div className="divider"></div>
          {/* Total */}
          <div className="content">
            <ul>
              <li className="bold">
                Total <span>{totalTransaction.toFixed(2)} €</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment-card">
          <div className="content">
            Il ne vous reste plus qu'une étape pour vous offrir
            <span className="bold"> {offer.product_name}</span>. Vous allez
            payer <span className="bold">{totalTransaction.toFixed(2)} €</span>{" "}
            (frais de protection et frais de port inclus).
            <div className="divider"></div>
          </div>
          {/* Stripe */}
          <Elements stripe={stripePromise}>
            <CheckoutForm offer={offer} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
