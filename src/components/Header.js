import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/img/logo.png";

const Header = ({ userToken, setUser, search, setSearch, sort, setSort }) => {
  const [title, setTitle] = useState(search.title);
  const [priceMin, setPriceMin] = useState(search.priceMin);
  const [priceMax, setPriceMax] = useState(search.priceMax);
  const [clickSort, setClickSort] = useState(sort);

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

  const handleSort = (event) => {
    console.log("coucou");
    const newSort = !sort;
    setSort(newSort);
  };

  const handleReset = (event) => {
    const newSearch = {
      title: undefined,
      priceMin: 0,
      priceMax: undefined,
    };
    setTitle(undefined);
    setPriceMin(0);
    setPriceMax(undefined);
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
          <span className="increasing">Trier par prix </span>
          <span
            className="sort-price"
            onClick={() => {
              handleSort();
            }}
          >
            {sort ? " croissant" : " décroissant"}
          </span>
          <input type="hidden" value={clickSort} onChange={handleSort} />
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
        <Link className="nav-link" to="/publish">
          <button className="button-sold">Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
