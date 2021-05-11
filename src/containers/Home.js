import axios from "axios";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ page, setPage, search, sort }) => {
  const LIMIT = 4;

  const [count, setCount] = useState(0);
  const [offers, setOffers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(
        //   "https://vinted-sda.herokuapp.com/offers"
        // );

        // Query Search
        let query = "";
        if (search.title) {
          query += `&title=${search.title}`;
        }
        let priceMin = 0;
        if (!isNaN(search.priceMin) && search.priceMin > 0) {
          priceMin = search.priceMin;
        }
        query += `&priceMin=${priceMin}`;
        if (!isNaN(search.priceMax) && search.priceMax > 0) {
          query += `&priceMax=${search.priceMax}`;
        }
        if (sort) {
          query += "&sort=price-asc";
        } else {
          query += "&sort=price-asc";
        }
        console.log(query);
        // Request
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?page=${page}&limit=${LIMIT}${query}`
        );

        setOffers(response.data.offers);
        setCount(response.data.count);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [page, search]);

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
