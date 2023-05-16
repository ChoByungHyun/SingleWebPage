import React from "react";
import Login from "../Login/Login";
import MyButton from "../Components/MyButton";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>회원가입페이지입니다.</div>
      <MyButton text={"Back"} onClick={() => navigate(-1)} />
    </div>
  );
};

export default SignUp;
