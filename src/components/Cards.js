import Card from "./Card";

const Cards = ({ offers }) => {
  const listOffers = offers.map((offer, index) => {
    return <Card key={index} offer={offer} />;
  });
  console.log(offers);
  return <div className="home-cards">{listOffers}</div>;
};

export default Cards;
