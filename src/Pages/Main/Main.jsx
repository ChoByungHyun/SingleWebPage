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
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../module/modalToggle";

const Main = () => {
  const navigate = useNavigate();

  const modalState = useSelector((state) => {
    return state.modalToggle.modalBtn;
  });

  const dispatch = useDispatch();
  const onOpenModal = () => dispatch(openModal());

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
        <MyButton text={"메모장 열기"} onClick={onOpenModal} />
        <Portal>{modalState ? <Modal /> : <div></div>}</Portal>
      </div>
    </div>
  );
};

export default Main;
