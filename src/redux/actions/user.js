export const UPDATE_NAME = "UPDATE_NAME";

//Action creators
export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: {
      name,
    },
  };
};
