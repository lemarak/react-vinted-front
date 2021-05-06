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
      <nav>
        <Link className="nav-link" to="/signup">
          <button className="button-login-signup">S'inscrire</button>
        </Link>
        <Link className="nav-link" to="/login">
          <button className="button-login-signup"> Se connecter</button>
        </Link>
        <Link className="nav-link">
          <button className="button-sold">Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
