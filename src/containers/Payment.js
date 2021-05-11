import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { offer } = location.state;
  console.log(offer);
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
              <li class="bold">
                Total <span>{totalTransaction.toFixed(2)} €</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="payment-card">
          <div class="content">
            Il ne vous reste plus qu'une étape pour vous offrir
            <span class="bold"> {offer.product_name}</span>. Vous allez payer{" "}
            <span class="bold">{totalTransaction.toFixed(2)} €</span> (frais de
            protection et frais de port inclus).<div class="divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
