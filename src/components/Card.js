import { Link } from "react-router-dom";

const Card = ({ offer }) => {
  return (
    <div className="home-card">
      <div className="card-owner">
        <img
          src={offer.owner.account.avatar.url}
          alt={offer.owner.account.username}
        />
        <span>{offer.owner.account.username}</span>
      </div>
      <Link to={`/offer/${offer._id}`}>
        <img
          className="home-card-img-product"
          src={offer.product_pictures[0].url}
          alt={offer.product_name}
        />
      </Link>
      <div className="card-details">
        <span>{offer.product_price.toFixed(2)} €</span>

        <span>{offer.product_details[0].MARQUE}</span>
      </div>
    </div>
  );
};

export default Card;
