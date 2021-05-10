import { Link } from "react-router-dom";

const Card = ({ offer }) => {
  const findParam = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key]) {
        return arr[i][key];
      }
    }
    return "";
  };

  return (
    <div className="home-card">
      <div className="card-owner">
        {offer.owner.account.avatar && (
          <img
            src={offer.owner.account.avatar.url}
            alt={offer.owner.account.username}
          />
        )}
        <span>{offer.owner.account.username}</span>
      </div>
      {offer.product_pictures.length > 0 ? (
        <Link to={`/offer/${offer._id}`}>
          <img
            className="home-card-img-product"
            src={offer.product_pictures[0].url}
            alt={offer.product_name}
          />{" "}
        </Link>
      ) : (
        <Link to={`/offer/${offer._id}`}>
          {" "}
          <img
            className="home-card-img-product"
            src={offer.product_image.url}
            alt={offer.product_name}
          />
        </Link>
      )}
      <div className="card-details">
        <span>{offer.product_price.toFixed(2)} €</span>
        <span>{findParam(offer.product_details, "TAILLE")}</span>
        <span>{offer.product_details[0].MARQUE}</span>
      </div>
    </div>
  );
};

export default Card;
