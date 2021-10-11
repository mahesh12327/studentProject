import { React, useState } from "react";

const Signup = (props) => {
  const [signupUserName, setSignupUserName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const signupDetails = {
      userName: signupUserName,
      password: signupPassword,
    };
    props.signupDetails(signupDetails);
    setSignupUserName("");
    setSignupPassword("");
  };

  return (
    <div className="Login container w-50 mt-3">
      <form onSubmit={submitHandler}>
        <h2 className="text-center">Signup</h2>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            UserName
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={signupUserName}
              onChange={(event) => setSignupUserName(event.target.value)}
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
              value={signupPassword}
              onChange={(event) => setSignupPassword(event.target.value)}
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
