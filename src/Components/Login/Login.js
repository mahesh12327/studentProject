import { React, useState } from "react";

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
    <div className="Login container w-50 mt-3">
      <form onSubmit={submitHandler}>
        <h2 className="text-center">Login</h2>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            UserName
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={loginUserName}
              onChange={(event) => setLoginUserName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={loginPassword}
              onChange={(event) => setLoginPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
