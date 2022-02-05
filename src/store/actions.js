const url = "http://localhost:5000/api/v1/footwears";

export const fetchData = () => async (dispatch) => {
  dispatch(setLoadingState(true));
  const response = await fetch(url);
  const data = await response.json();

  dispatch(setLoadingState(false));
  dispatch(addData(data));
};

export const addData = (data) => {
  return {
    type: "UPDATE_DATA",
    payload: data.items,
  };
};

export const setLoadingState = (loadingState) => {
  return {
    type: "LOADING_STATE",
    payload: loadingState,
  };
};

export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
