import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  const [offer, setOffer] = useState();
  const [offerPictures, setOfferPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const findParam = (arr, key) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key]) {
        return arr[i][key];
      }
    }
    return "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
        response.data.product_pictures.length > 0
          ? setOfferPictures(response.data.product_pictures)
          : setOfferPictures([response.data.product_image]);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  const carousel = offerPictures.map((picture, index) => {
    return (
      <div key={index}>
        <img className="offer-picture" src={picture.url} alt={offer.name} />
      </div>
    );
  });
  return isLoading ? (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
      <span>En cours de chargement</span>
    </div>
  ) : (
    <div>
      {/* Offer */}
      <div className="container-offer">
        <div className="offer">
          {/* Carousel pictures */}
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={true}
            infinite={false}
            className="offer-carousel"
          >
            {carousel}
          </Carousel>

          {/* details */}
          <div className="offer-details">
            {/* price */}
            <span className="offer-price">
              {offer.product_price.toFixed(2)} €
            </span>
            {/* lines details */}
            <div className="lines-offer-details">
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">MARQUE</span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "MARQUE")}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">TAILLE</span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "TAILLE")}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">ETAT</span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "ETAT")}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">COULEUR</span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "COULEUR")}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">EMPLACEMENT</span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "EMPLACEMENT")}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">
                  MODES DE PAIMENT
                </span>
                <span className="line-offer-detail-value">
                  {findParam(offer.product_details, "MODES DE PAIEMENT")}
                </span>
              </div>
            </div>
            {/* divider */}
            <div className="divider"></div>
            {/* name */}
            <div className="offer-name">{offer.product_name}</div>
            {/* description */}
            <div className="offer-description">{offer.product_description}</div>
            {/* owner */}
            <div className="offer-owner">
              {offer.owner.account.avatar && (
                <img
                  src={offer.owner.account.avatar.url}
                  alt={offer.owner.account.username}
                />
              )}
              <span>{offer.owner.account.username}</span>
            </div>
            {/* buy */}
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
