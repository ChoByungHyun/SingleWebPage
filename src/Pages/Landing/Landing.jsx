import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Main from "../Main/Main";
import MyButton from "../Components/MyButton";
import "./Landing.css";
import {
  Route,
  Link,
  Routes,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate("/Login");
  };
  const goToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <div className="landing-title title">어서오세요!</div>
      <MyButton text={"Login"} onClick={goToLogIn} />
      <MyButton text={"Sign Up"} onClick={goToSignUp} />
    </div>
  );
};

export default Landing;
