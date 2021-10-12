import { React, useState } from "react";
import "./Signup.css";

const Signup = (props) => {
  const [signupUserName, setSignupUserName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUserNameValid,setSignupUserNameValid]=useState(false);
  const [signupPasswordValid,setSignupPasswordValid]=useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    if(signupUserName===''){
      setSignupUserNameValid(true);
    }
    if(signupPassword===''){
      setSignupPasswordValid(true);
    }
    if(signupUserName!=='' && signupPassword!==''){
      const signupDetails = {
        userName: signupUserName,
        password: signupPassword,
      };
      props.signupDetails(signupDetails);
      setSignupUserName("");
      setSignupPassword("");
    }
  };

  return (
    <div className="Signup container border rounded">
      <form onSubmit={submitHandler}>
        <h2 className="text-center signup-text">Signup</h2>
        <div className="row item">
          <label htmlFor="staticEmail" className="col-sm-5 col-form-label">
            UserName
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={signupUserName}
              placeholder="Enter Username"
              onChange={(event) => {setSignupUserName(event.target.value);setSignupUserNameValid(false);}}
              
            />
          </div>
          {signupUserNameValid && <p className="text-danger text-center mt-2 lead">Enter valid username</p>}
        </div>
        <div className="row item">
          <label htmlFor="inputPassword" className="col-sm-5 col-form-label ">
            Password
          </label>
          <div className="col-sm-6">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={signupPassword}
              placeholder="Enter Password"
              onChange={(event) => {setSignupPassword(event.target.value);setSignupPasswordValid(false);}}
              
            />
          </div>
          {signupPasswordValid && <p className="text-danger text-center mt-2 lead">Enter valid password</p>}
        </div>
        <div className="text-center item mb-3">
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
