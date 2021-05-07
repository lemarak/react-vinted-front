import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/img/logo.png";

const Header = ({ userToken, setUser, search, setSearch }) => {
  const [title, setTitle] = useState(search.title);
  const [priceMin, setPriceMin] = useState(search.priceMin);
  const [priceMax, setPriceMax] = useState(search.priceMax);
  // form search
  const handleSearchTitle = (event) => {
    const newSearch = { ...search };
    newSearch.title = event.target.value;
    setTitle(event.target.value);
    setSearch(newSearch);
  };

  const handleSearchPrices = (event, field) => {
    const newSearch = { ...search };
    if (isNaN(event.target.value)) {
      event.target.value = "";
    } else {
      newSearch[field] = event.target.value;
      field === "priceMin"
        ? setPriceMin(event.target.value)
        : setPriceMax(event.target.value);
      setSearch(newSearch);
    }
  };

  const handleReset = (event) => {
    const newSearch = {
      title: "",
      priceMin: 0,
      priceMax: null,
    };
    setTitle("");
    setPriceMin(0);
    setPriceMax("");
    setSearch(newSearch);
  };

  return (
    <header>
      {/* Logo */}
      <Link to="/">
        <img className="logo" src={Logo} alt="Vinted" />
      </Link>

      {/* Search */}
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Recherche des articles"
          onChange={handleSearchTitle}
          value={title}
        ></input>
        <div className="search-prices">
          <span>Prix entre</span>
          <input
            type="text"
            placeholder="mini"
            value={priceMin}
            onChange={(event) => handleSearchPrices(event, "priceMin")}
          ></input>
          <input
            type="text"
            placeholder="maxi"
            value={priceMax}
            onChange={(event) => handleSearchPrices(event, "priceMax")}
          ></input>
          <FontAwesomeIcon
            icon="eraser"
            className="icon"
            onClick={handleReset}
          />{" "}
        </div>
      </div>

      {/* Navigation */}
      <nav>
        {userToken ? (
          <button className="logout" onClick={() => setUser(null)}>
            Se déconnecter
          </button>
        ) : (
          <>
            <Link className="nav-link" to="/signup">
              <button className="button-login-signup">S'inscrire</button>
            </Link>
            <Link className="nav-link" to="/login">
              <button className="button-login-signup"> Se connecter</button>
            </Link>
          </>
        )}
        <Link className="nav-link" to="/">
          <button className="button-sold">Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
