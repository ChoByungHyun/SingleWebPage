import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Main from "../Main/Main";
import MyButton from "../Components/MyButton";
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
      <div>안녕하세요. 랜딩페이지입니다.</div>
      <MyButton text={"Login"} onClick={goToLogIn} />
      <MyButton text={"Sign Up"} onClick={goToSignUp} />
    </div>
  );
};

export default Landing;
