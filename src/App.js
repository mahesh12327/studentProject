import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MobileNav from "./Components/MobileNav/MobileNav";
import Welcome from "./Components/Welcome/Welcome";

function App() {
  const [studentSignupDetails, setStudentSignupDetails] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(
        "https://studentproject-d7e8a-default-rtdb.firebaseio.com/signup.json"
      );
      console.log(response);
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

  const postSignupDetails = (event) => {
    const updatedSignupDetails = [...studentSignupDetails, event];
    setStudentSignupDetails(updatedSignupDetails);
  };
  const postHttpRequest = async (data) => {
    const response = await fetch(
      "https://studentproject-d7e8a-default-rtdb.firebaseio.com/signup.json",
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
    } else {
      setError(true);
    }
  };

  const logoutHandler = () => {
    setLoginSuccess(false);
  };

  const notificationHandler = () => {
    setError(false);
  };
  const menuHandler = () => {
    setIsMenu((prevState) => !prevState);
  };
  return (
    <div className="App text-white">
      {isMenu && (
        <MobileNav close={menuHandler} logout={logoutHandler}></MobileNav>
      )}
      <Header menu={menuHandler} isLogged={loginSuccess}></Header>
      {!loginSuccess && (
        <Welcome
          isLogin={loginSuccess}
          loginDetails={postLoginDetails}
          error={error}
          changeNotification={notificationHandler}
          signupDetails={postSignupDetails}
        ></Welcome>
      )}
      {loginSuccess && <Dashboard logout={logoutHandler}></Dashboard>}
      <Footer></Footer>
    </div>
  );
}

export default App;
