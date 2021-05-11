import "./App.css";

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faAngleLeft,
  faAngleRight,
  faEraser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner, faAngleLeft, faAngleRight, faEraser);

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({
    title: "",
    priceMin: 0,
    priceMax: null,
  });
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 2 });
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header
        userToken={userToken}
        setUser={setUser}
        setSearch={setSearch}
        search={search}
      />
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/publish">
          {userToken ? (
            <Publish userToken={userToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/payment">
          {userToken ? (
            <Payment userToken={userToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home page={page} setPage={setPage} search={search} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
