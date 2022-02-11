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

export const removeFromCart = (index) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: index,
  };
};

export const updateItemToEdit = (itemIndex) => {
  return {
    type: "UPDATE_ITEM_TO_EDIT",
    payload: itemIndex,
  };
};

export const showEditModal = () => {
  return {
    type: "SHOW_EDIT_MODAL",
  };
};

export const hideEditModal = () => {
  return {
    type: "HIDE_EDIT_MODAL",
  };
};

export const showSidebar = () => {
  return {
    type: "SHOW_SIDEBAR",
  };
};

export const hideSidebar = () => {
  return {
    type: "HIDE_SIDEBAR",
  };
};

export const editCartItem = (index, item) => {
  return {
    type: "EDIT_CART_ITEM",
    payload: { index, item },
  };
};

export const changeClickedProductId = (id) => {
  return {
    type: "CHANGE_CLICKED_PRODUCT",
    payload: id,
  };
};

export const showItemModal = () => {
  return {
    type: "SHOW_ITEM_MODAL",
  };
};

export const hideItemModal = () => {
  return {
    type: "HIDE_ITEM_MODAL",
  };
};
