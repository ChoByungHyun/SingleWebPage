import React from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Main from "../Main/Main";
import MyButton from "../Components/MyButton";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/Main");
  };
  return (
    <div className="login-wrapper">
      <div>로그인페이지입니다.</div>
      <div className="login-input-container">
        <div className="email">
          <label htmlFor="loginId">ID</label>
          <input
            className="login-input"
            id="loginId"
            placeholder="Username@gmail.com"
            type="text"
          />
        </div>
        <div className="password">
          <label htmlFor="loginPw">PW</label>
          <input
            className="login-input"
            id="loginPw"
            placeholder="password"
            type="text"
          />
        </div>
      </div>
      <div className="login-button-container">
        <MyButton text={"Back"} onClick={() => navigate(-1)} />
        <MyButton text={"Login!"} onClick={goToMain} />
      </div>
    </div>
  );
};

export default Login;
