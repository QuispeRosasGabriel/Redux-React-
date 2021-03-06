//Action creators
export const increment = () => {
  return { type: "INCREMENT" };
};

export const decrement = () => {
  return { type: "DECREMENT" };
};

export const incrementAsync = (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "INCREMENT",
    });
  }, 2000);
};
