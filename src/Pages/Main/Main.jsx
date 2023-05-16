import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import MyButton from "../Components/MyButton";
import { useNavigate, useLocation } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const pw = location.state.pw;
  // console.log(id);
  console.log(location.state);

  return (
    <div>
      메인페이지입니다.
      <p>안녕하세요! {location.state[0].name}님! </p>
      <p>당신의 전화번호는 {location.state[0].phone.slice(0, 14)}입니다. </p>
      <MyButton text={"Back"} onClick={() => navigate(-1)} />
    </div>
  );
};

export default Main;
