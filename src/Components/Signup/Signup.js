import { React, useState } from "react";
import "./Signup.css";
import { ImUser } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = (props) => {
  const [signupUserName, setSignupUserName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUserNameValid, setSignupUserNameValid] = useState(false);
  const [signupPasswordValid, setSignupPasswordValid] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const loginHandler = (event) => {
    event.preventDefault();
    props.login();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (signupUserName === "") {
      setSignupUserNameValid(true);
    }
    if (signupPassword === "") {
      setSignupPasswordValid(true);
    }
    if (signupUserName !== "" && signupPassword !== "") {
      const SignupDetails = {
        userName: signupUserName,
        password: signupPassword,
      };
      props.signupDetails(SignupDetails);
      setSignupUserName("");
      setSignupPassword("");
      setSignupSuccess(true);
    }
  };
  return (
    <div className="Signup container">
      <form className="signupForm" onSubmit={submitHandler}>
        {signupSuccess && (
          <p className="signup-success">Registered Successfully !!</p>
        )}
        <h2 className="signup-text">Register</h2>
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
                value={signupUserName}
                placeholder="Username"
                onChange={(event) => {
                  setSignupUserName(event.target.value);
                  setSignupUserNameValid(false);
                }}
              />
            </div>
          </div>
          {signupUserNameValid && (
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
                value={signupPassword}
                placeholder="Password"
                onChange={(event) => {
                  setSignupPassword(event.target.value);
                  setSignupPasswordValid(false);
                }}
              />
            </div>
          </div>
          {signupPasswordValid && (
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
            Register
          </button>
          <p className="didnt-signup">
            Already Registered?
            <a
              className="nav-link"
              aria-current="page"
              href="/"
              onClick={loginHandler}
            >
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
