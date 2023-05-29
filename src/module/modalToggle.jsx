// 액션 생성함수
export const openModal = () => {
  return { type: "toggle" };
};

const initialState = {
  modalBtn: false,
};

const modalToggle = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      console.log("open");
      console.log(state);
      return {
        modalBtn: !state.modalBtn,
      };
    default:
      return state;
  }
};

export default modalToggle;
