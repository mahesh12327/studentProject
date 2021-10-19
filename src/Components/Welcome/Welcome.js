import { React, useState } from "react";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./Welcome.css";

const Welcome = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(false);

  const signupHandler = () => {
    setIsSignup(true);
    setIsLogin(false);
  };
  const loginHandler = () => {
    setIsSignup(false);
    setIsLogin(true);
  };
  return (
    <div className="Welcome rounded">
      <div className="introduction">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple Student Management app, where we can perform CURD
          operations on Student Registrations.
        </p>
        <hr className="my-4"></hr>
        <p>
          Register for new User, If Registered Login to perform operations in
          the Student Management app.
        </p>
      </div>
      <div>
        {isLogin && (
          <Login
            signup={signupHandler}
            error={props.error}
            loginDetails={props.loginDetails}
            changeNotification={props.changeNotification}
          ></Login>
        )}
        {isSignup && (
          <Signup
            login={loginHandler}
            signupDetails={props.signupDetails}
          ></Signup>
        )}
      </div>
    </div>
  );
};

export default Welcome;
