import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const Header = ({ userToken, setUser }) => {
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
