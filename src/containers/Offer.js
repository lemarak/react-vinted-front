import axios from "axios";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Offer = () => {
  const { id } = useParams();

  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOffer(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
      <span>En cours de chargement</span>
    </div>
  ) : (
    <div>
      <Header />
      {/* Offer */}
      <div className="container-offer">
        <div className="offer">
          {/* picture */}
          <img
            className="offer-picture"
            src={offer.product_pictures[0].url}
            alt={offer.product_name}
          />
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
                  {offer.product_details[0].MARQUE}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">TAILLE</span>
                <span className="line-offer-detail-value">N.R.</span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">ETAT</span>
                <span className="line-offer-detail-value">
                  {offer.product_details[1].ETAT}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">COULEUR</span>
                <span className="line-offer-detail-value">
                  {offer.product_details.COULEUR}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">EMPLACEMENT</span>
                <span className="line-offer-detail-value">
                  {offer.product_details.EMPLACEMENT}
                </span>
              </div>
              <div className="line-offer-detail">
                <span className="line-offer-detail-title">
                  MODES DE PAIMENT
                </span>
                <span className="line-offer-detail-value">N.R.</span>
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
              <img
                src={offer.owner.account.avatar.url}
                alt={offer.owner.account.username}
              />
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
