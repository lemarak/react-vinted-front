const Card = ({ offer }) => {
  console.log(offer.product_pictures);
  return (
    <div className="home-card">
      <span>{offer.owner.account.username}</span>
      <img
        className="home-card-img-product"
        src={offer.product_pictures[0].url}
        alt={offer.product_name}
      />
      <span>{offer.product_price.toFixed(2)} €</span>
      <span>{offer.product_description}</span>
      <span>{offer.product_details.MARQUE}</span>
    </div>
  );
};

export default Card;
