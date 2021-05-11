import axios from "axios";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      // const response = await axios.post(
      //   "https://lereacteur-vinted-api.herokuapp.com/user/login",
      //   data
      // );
      const response = await axios.post(
        "http://localhost:3001/user/login",
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
      if (error.response.status === 401) {
        setIsValid(false);
      }
    }
  };

  return (
    <div className="form-div">
      <h2>Se connecter</h2>
      <form
        className="signup-form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="Mot de passe"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        {!isValid && (
          <span className="signup-login-error-message">
            Mauvais email et/ou mot de passe !
          </span>
        )}

        <button type="submit">Se connecter</button>
      </form>
      <Link to="/signup">
        <span>Pas encore de compte ? Inscris-toi !</span>
      </Link>
    </div>
  );
};

export default Login;
