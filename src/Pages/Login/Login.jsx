import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Main from "../Main/Main";
import MyButton from "../Components/MyButton";
import "./Login.css";
const Login = () => {
  const temp = {
    id: "Sincere@april.biz",
    pw: "Bret",
  };
  const navigate = useNavigate();

  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const [getInfo, setGetInfo] = useState([]);

  const goToMain = () => {
    navigate("/Main", { state: { ...getInfo } });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setGetInfo(res);
      });
  }, []);

  function checkUserInfo() {
    if (idInput === getInfo[0].email && pwInput === getInfo[0].username) {
      goToMain();
    } else {
      alert("아이디 비밀번호를 확인해주세요.");
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
            value={idInput}
            onChange={(e) => setIdInput(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="loginPw">PW</label>
          <input
            className="login-input"
            id="loginPw"
            placeholder="password"
            type="text"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
          />
        </div>
      </div>
      <div className="login-button-container">
        <MyButton text={"Back"} onClick={() => navigate(-1)} />
        <MyButton text={"Login"} onClick={checkUserInfo} />
      </div>
    </div>
  );
};

export default Login;
