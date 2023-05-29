import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "./Main.css";
import MyButton from "../Components/MyButton";
import { useNavigate, useLocation } from "react-router-dom";
import MyHeader from "../Components/MyHeader";
import MemoList from "../Components/Memo/MemoComponent";
import Portal from "../../Common/Portal/Portal";
import Modal from "../../Common/Portal/Modal";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };
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
            <p>안녕하세요! </p>
            <MyButton text={"LogOut"} onClick={() => goToLogin()} />
          </div>
        }
      />
      <div>
        <MyButton text={"메모열기"} onClick={handleModal} />
        <Portal>{modalOn && <Modal onClose={handleModal} />}</Portal>
      </div>
    </div>
  );
};

export default Main;
