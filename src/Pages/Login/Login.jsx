import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Main from "../Main/Main";
import MyButton from "../Components/MyButton";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    login_type: "BUYER",
  });

  async function fetchLogin() {
    try {
      console.log(userInput);

      const response = await fetch(
        `https://openmarket.weniv.co.kr/accounts/login/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(userInput),
        }
      );
      console.log(response);
      if (!response.ok) {
        console.log("틀림");
        alert("아이디 비밀번호를 확인해주세요!");
      } else {
        navigate("/Main", { state: userInput });
      }
    } catch (error) {
      console.error("데이터를 가져오는데 문제가 생겼습니다.", error);
    }
  }

  return (
    <div className="login-wrapper">
      <div className="title">LOGIN</div>
      <div className="login-input-container">
        <div className="email">
          <label htmlFor="loginId">ID</label>
          <input
            className="login-input"
            id="loginId"
            placeholder="Username@gmail.com"
            type="text"
            // value={idInput}
            onChange={(e) => {
              setUserInput({
                ...userInput,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className="password">
          <label htmlFor="loginPw">PW</label>
          <input
            className="login-input"
            id="loginPw"
            placeholder="password"
            type="text"
            // value={pwInput}
            onChange={(e) => {
              setUserInput({
                ...userInput,
                password: e.target.value,
              });
            }}
          />
        </div>
      </div>
      <div className="login-button-container">
        <MyButton text={"Back"} onClick={() => navigate(-1)} />
        <MyButton text={"Login"} onClick={fetchLogin} />
      </div>
    </div>
  );
};

export default Login;
