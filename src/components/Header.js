import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="Vinted" />
      <input
        type="text"
        class="search-input"
        placeholder="Recherche des articles"
      ></input>
      <nav className="menu">
        <button class="button-login-signup">S'inscrire</button>
        <button class="button-login-signup"> Se connecter</button>
        <button class="button-sold">Vends tes articles</button>
      </nav>
    </header>
  );
};

export default Header;
