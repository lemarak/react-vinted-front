import axios from "axios";

import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        data
      );
      const token = response.data.token;

      if (token) {
        setUser(response.data.token);
        setIsValid(true);
        history.push("/");
      }
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 409) {
        setIsValid(false);
      }
    }
  };
  return (
    <div className="form-div">
      <h2>S'inscrire</h2>
      <form
        className="signup-form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nom"
          id="nom"
          placeholder="Nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        {!isValid && (
          <span className="signup-login-error-message">
            Cet email a déjà un compte chez nous !
          </span>
        )}

        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
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
        <span>Tu as déjà un compte ? Connecte-toi !</span>
      </Link>
    </div>
  );
};

export default Signup;
