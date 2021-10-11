import { React } from "react";
import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="Welcome jumbotron container bg-secondary rounded">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This is a simple Student app, where we can perform CURD operations on
        Student Registrations.
      </p>
      <hr className="my-4"></hr>
      <p>
        Signup for new Registrations, If Registered Login to perform operations
        in the Student app.
      </p>
      <p className="lead">
        <a
          className="btn btn-primary btn-lg mb-3"
          href="/"
          role="button"
          onClick={(event) => {
            event.preventDefault();
            props.welcomeLogin();
          }}
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default Welcome;
