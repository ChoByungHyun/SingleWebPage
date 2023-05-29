import React, { useState } from "react";
import MemoList from "./MemoList";
import styled from "styled-components";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";
const MemoComponent = ({ onClose }) => {
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);
  const onChangeHandler = (e) => {
    setMemo(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...memos, memo];
    setMemos(newTitles);
  };
  return (
    <div>
      <MyHeader
        headText={"메모장"}
        leftChild={<MyButton text={"닫기"} onClick={onClose} />}
      />
      <MemoConainer>
        <MemoCreate>
          <h1>메모작성</h1>
          <input type="text" onChange={onChangeHandler} />
          <button onClick={onClickButtonHandler}>버튼</button>
        </MemoCreate>
        <br></br>
        <MemoList titles={memos} />
      </MemoConainer>
    </div>
  );
};

export default MemoComponent;
const MemoConainer = styled.div`
  gap: 270px;
  display: flex;
`;
const MemoCreate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-right: 1px solid black;
  padding-right: 30px;
  box-sizing: border-box;
  gap: 10px;
`;
