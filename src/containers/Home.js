import axios from "axios";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSpinner);

const Home = () => {
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://vinted-sda.herokuapp.com/offers"
        // );
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setOffers(response.data.offers);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
      <span>En cours de chargement</span>
    </div>
  ) : (
    <div>
      <Header />
      <Hero />
      <Cards offers={offers} />
    </div>
  );
};

export default Home;
