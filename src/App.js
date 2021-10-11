import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const signupHandler = () => {
    setIsSignUp(true);
    setIsLogin(false);
  };
  const loginHandler = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };
  const postSignupDetails = async (event) => {
    const response = await fetch(
      "https://react-student-project-default-rtdb.firebaseio.com/signup.json",
      { method: "PUT", body: JSON.stringify(event) }
    );
    console.log(response);
  };
  const postLoginDetails = (event) => {
    console.log(event);
  };
  return (
    <div className="App">
      <Navigation signup={signupHandler} login={loginHandler}></Navigation>
      {isSignUp && <Signup signupDetails={postSignupDetails}></Signup>}
      {isLogin && <Login loginDetails={postLoginDetails}></Login>}
    </div>
  );
}

export default App;
