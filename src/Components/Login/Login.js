import { React, useState } from "react";
import "./Login.css";
import { ImUser } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = (props) => {
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginUserNameValid, setLoginUserNameValid] = useState(false);
  const [loginPasswordValid, setLoginPasswordValid] = useState(false);

  const signupHandler = (event) => {
    event.preventDefault();
    props.signup();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (loginUserName === "") {
      setLoginUserNameValid(true);
    }
    if (loginPassword === "") {
      setLoginPasswordValid(true);
    }
    if (loginUserName !== "" && loginPassword !== "") {
      const loginDetails = {
        userName: loginUserName,
        password: loginPassword,
      };
      props.loginDetails(loginDetails);
      setLoginUserName("");
      setLoginPassword("");
    }
  };
  return (
    <div className="Login container">
      <form className="loginForm" onSubmit={submitHandler}>
        <h2 className="login-text">Login</h2>
        <div className="row item">
          <div className="col-sm-12">
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <ImUser size={30} />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                value={loginUserName}
                placeholder="Username"
                onChange={(event) => {
                  setLoginUserName(event.target.value);
                  props.changeNotification();
                  setLoginUserNameValid(false);
                }}
              />
            </div>
          </div>
          {loginUserNameValid && (
            <p className="text-danger text-center mt-2 lead">
              Enter valid username
            </p>
          )}
        </div>
        <div className="row item">
          <div className="col-sm-12">
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <RiLockPasswordFill size={30} />
                </div>
              </div>
              <input
                type="password"
                className="form-control"
                value={loginPassword}
                placeholder="Password"
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                  props.changeNotification();
                  setLoginPasswordValid(false);
                }}
              />
            </div>
          </div>
          {loginPasswordValid && (
            <p className="text-danger text-center mt-2 lead">
              Enter valid password
            </p>
          )}
        </div>
        {props.error && (
          <p className="text-danger text-center mt-3 lead">
            UserName or Password is Wrong
          </p>
        )}
        <div className="mt-2">
          <input type="checkbox"></input>
          <p className="checkbox">I agree to the Terms and Privacy Policy.</p>
        </div>
        <div className="mt-3 last-form-sec">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p className="didnt-signup">
            Didn't have Account?
            <a
              className="nav-link"
              aria-current="page"
              href="/"
              onClick={signupHandler}
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
