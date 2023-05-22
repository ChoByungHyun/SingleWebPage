import React from "react";
import MyButton from "../Components/MyButton";
import "./Landing.css";
import { useNavigate } from "react-router-dom";

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
      <div className="landing-title title">WELCOME!</div>
      <MyButton text={"Login"} onClick={goToLogIn} />
      <MyButton text={"Sign Up"} onClick={goToSignUp} />
    </div>
  );
};

export default Landing;
