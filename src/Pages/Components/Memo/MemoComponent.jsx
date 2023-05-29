import React, { useState } from "react";
import MemoList from "./MemoList";
import styled from "styled-components";
import MyHeader from "../MyHeader";
import MyButton from "../MyButton";
import { useDispatch } from "react-redux";
import { openModal } from "../../../module/modalToggle";
const MemoComponent = () => {
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState([]);
  const onChangeHandler = (e) => {
    setMemo(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...memos, memo];
    setMemos(newTitles);
  };

  const dispatch = useDispatch();
  const onOpenModal = () => dispatch(openModal());

  return (
    <div>
      <MyHeader
        headText={"메모장"}
        leftChild={<MyButton text={"닫기"} onClick={onOpenModal} />}
      />
      <MemoConainer>
        <MemoCreate>
          <h1>메모작성</h1>
          <MemoInput
            placeholder="메모를 입력하세요"
            type="text"
            onChange={onChangeHandler}
          />
          <MyButton
            type={"Width_Full"}
            onClick={onClickButtonHandler}
            text={"메모 작성"}
          />
        </MemoCreate>
        <br></br>
        <MemoList titles={memos} />
      </MemoConainer>
    </div>
  );
};
export default MemoComponent;
const MemoConainer = styled.div`
  display: flex;
  /* justify-content: center; */
`;
const MemoCreate = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  padding-right: 50px;
  box-sizing: border-box;
  gap: 10px;
`;
const MemoInput = styled.textarea`
  border: 1px solid black;
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 10px;
`;
