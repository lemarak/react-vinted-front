import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <h2>S'inscrire</h2>
      <form className="signup-form" action="" method="post">
        <input
          type="text"
          name="nom"
          id="nom"
          placeholder="Nom d'utilisateur"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="pwd" id="pwd" placeholder="Mot de passe" />
        <div className="checkbox-div">
          <input type="checkbox" name="news" id="news" />
          <span>S'inscrire à notre newsletter</span>
        </div>
        <p className="conditions-news">
          En m'inscrivant je confirme avoir lu et accepté les Termes &amp;
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to="/login">
        <a href="/login">Tu as déjà un compte ? Connecte-toi !</a>
      </Link>
    </div>
  );
};

export default Signup;
