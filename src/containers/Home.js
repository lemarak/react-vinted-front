import axios from "axios";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSpinner, faAngleLeft, faAngleRight);

const Home = () => {
  const LIMIT = 4;
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://vinted-sda.herokuapp.com/offers"
        // );
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${LIMIT}`
        );
        setOffers(response.data.offers);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <div className="loading">
      <FontAwesomeIcon icon="spinner" className="icon" spin />
      <span>En cours de chargement</span>
    </div>
  ) : (
    <div>
      <Hero />
      <Pagination page={page} setPage={setPage} count={count} LIMIT={LIMIT} />
      <Cards offers={offers} />
    </div>
  );
};

export default Home;
