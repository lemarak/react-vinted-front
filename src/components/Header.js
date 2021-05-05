import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="Vinted" />
      </Link>
      <input
        type="text"
        className="search-input"
        placeholder="Recherche des articles"
      ></input>
      <nav className="menu">
        <button className="button-login-signup">S'inscrire</button>
        <button className="button-login-signup"> Se connecter</button>
        <button className="button-sold">Vends tes articles</button>
      </nav>
    </header>
  );
};

export default Header;
