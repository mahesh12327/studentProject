import { React, useState } from "react";

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
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand text-warning h1" href="/">
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
      </div>
    </nav>
  );
};

export default Navigation;
