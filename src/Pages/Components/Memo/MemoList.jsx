import React from "react";

const MemoList = ({ titles }) => {
  return (
    <div>
      <h1>메모 목록</h1>
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })}
    </div>
  );
};

const Memo = ({ title, idx }) => {
  return (
    <>
      <div>{idx + 1}번 메모</div>
      <article>{title}</article>
    </>
  );
};

export default MemoList;
