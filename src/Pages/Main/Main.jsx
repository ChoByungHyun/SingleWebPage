import React from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      메인페이지입니다.
      <MyButton text={"Back"} onClick={() => navigate(-1)} />
    </div>
  );
};

export default Main;
