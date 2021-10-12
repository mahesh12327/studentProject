import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [studentSignupDetails, setStudentSignupDetails] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(
        "https://react-student-project-default-rtdb.firebaseio.com/signup.json"
      );
      let data = await response.json();
      if (!data) {
        data = [];
      }
      setStudentSignupDetails(data);
    };
    getRequest();
  }, []);

  useEffect(() => {
    postHttpRequest(studentSignupDetails);
  }, [studentSignupDetails]);

  const signupHandler = () => {
    setIsSignUp(true);
    setIsLogin(false);
  };
  const loginHandler = () => {
    setIsLogin(true);
    setIsSignUp(false);
  };
  const postSignupDetails = (event) => {
    const updatedSignupDetails = [...studentSignupDetails, event];
    setStudentSignupDetails(updatedSignupDetails);
  };
  const postHttpRequest = async (data) => {
    const response = await fetch(
      "https://react-student-project-default-rtdb.firebaseio.com/signup.json",
      { method: "PUT", body: JSON.stringify(data) }
    );
    console.log(response);
  };

  const postLoginDetails = (event) => {
    const userPresent = studentSignupDetails.some(
      (student) =>
        student.userName === event.userName &&
        student.password === event.password
    );

    if (userPresent) {
      setLoginSuccess(true);
      setIsLogin(false);
      setIsSignUp(false);
    } else {
      setError(true);
    }
  };

  const welcomeLoginHandler = () => {
    setIsLogin(true);
  };

  const logoutHandler = () => {
    setLoginSuccess(false);
    setIsLogin(true);
  };

  const notificationHandler = () => {
    setError(false);
  };
  return (
    <div className="App bg-dark text-white">
      <Navigation
        signup={signupHandler}
        login={loginHandler}
        isLogin={loginSuccess}
        logout={logoutHandler}
      ></Navigation>
      {!isSignUp && !isLogin && !loginSuccess && (
        <Welcome welcomeLogin={welcomeLoginHandler}></Welcome>
      )}
      {isSignUp && <Signup signupDetails={postSignupDetails}></Signup>}
      {isLogin && (
        <Login
          loginDetails={postLoginDetails}
          error={error}
          changeNotification={notificationHandler}
        ></Login>
      )}
      {loginSuccess && <Dashboard></Dashboard>}
    </div>
  );
}

export default App;
