//Modal.js

import React from "react";
// import styled from "styled-components";
import styled from "styled-components";
import MemoComponent from "../../Pages/Components/Memo/MemoComponent";
import MyButton from "../../Pages/Components/MyButton";

const Modal = ({ onClose }) => {
  return (
    <Background>
      <Content>
        <MemoComponent onClose={onClose} />
      </Content>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  /* text-align: center; */
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  height: 90%;
  width: 90%;
  margin-top: 70px;
  position: relative;
  overflow: auto;
  background: #dde5f4;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 20px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
