import { React, useState } from "react";
import "./Navigation.css";

const Navigation = (props) => {
  const [signupActive, setSignupActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const signupHandler = (event) => {
    event.preventDefault();
    props.signup();
    setSignupActive(true);
    setLoginActive(false);
  };
  const loginHandler = (event) => {
    event.preventDefault();
    props.login();
    setLoginActive(true);
    setSignupActive(false);
  };
  const logoutHandler = (event) => {
    event.preventDefault();
    props.logout();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom navi">
      <div className="container">
        <a
          className="navbar-brand text-warning h1"
          href="/"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Student Site
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!props.isLogin && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={signupActive ? "nav-link active" : "nav-link"}
                  aria-current="page"
                  href="/"
                  onClick={signupHandler}
                >
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={loginActive ? "nav-link active" : "nav-link"}
                  href="/"
                  onClick={loginHandler}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
        {props.isLogin && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/" onClick={logoutHandler}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
