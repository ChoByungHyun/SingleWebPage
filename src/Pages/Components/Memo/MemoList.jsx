import React from "react";
import styled from "styled-components";

const MemoList = ({ titles }) => {
  return (
    <MemoListWrapper>
      <h1>메모 목록</h1>
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })}
    </MemoListWrapper>
  );
};

const Memo = ({ title, idx }) => {
  return (
    <MemoListContainer>
      <h4>{idx + 1}번 메모</h4>
      <div>{title}</div>
    </MemoListContainer>
  );
};

export default MemoList;
const MemoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 70%;
`;
const MemoListContainer = styled.div`
  border: 1px solid #000;
`;
