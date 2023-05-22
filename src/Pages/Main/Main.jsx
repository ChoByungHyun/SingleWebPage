import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "./Main.css";
import MyButton from "../Components/MyButton";
import { useNavigate, useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="main-Wrapper">
      <MyHeader
        headText={"메인페이지"}
        leftChild={<MyButton text={"Back"} onClick={() => navigate(-1)} />}
        rightChild={
          <div className="main-RightChild">
            <p>안녕하세요! {location.state[0].name}님! </p>
            <MyButton text={"LogOut"} onClick={() => goToLogin()} />
          </div>
        }
      />
      <div>
        <p>당신의 전화번호는 {location.state[0].phone.slice(0, 14)}입니다. </p>
      </div>
    </div>
  );
};

export default Main;
