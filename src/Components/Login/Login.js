import { React, useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const loginDetails = {
      userName: loginUserName,
      password: loginPassword,
    };
    props.loginDetails(loginDetails);
    setLoginUserName("");
    setLoginPassword("");
  };
  return (
    <div className="Login container border rounded">
      <form onSubmit={submitHandler}>
        <h2 className="text-center login-text">Login</h2>
        <div className="row item">
          <label htmlFor="staticEmail" className="col-sm-5 col-form-label">
            UserName
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={loginUserName}
              placeholder="Enter Username"
              onChange={(event) => {
                setLoginUserName(event.target.value);
                props.changeNotification();
              }}
              required
            />
          </div>
        </div>
        <div className="row item">
          <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
            Password
          </label>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={loginPassword}
              placeholder="Enter Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
                props.changeNotification();
              }}
              required
            />
          </div>
        </div>
        {props.error && (
          <p className="text-danger text-center mt-3 lead">
            UserName or Password is Wrong
          </p>
        )}
        <div className="text-center item mb-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
