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

export const updateItemToEdit = (id) => {
  return {
    type: "UPDATE_ITEM_TO_EDIT",
    payload: id,
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

export const editCartItem = (itemIndex, item) => {
  return {
    type: "EDIT_CART_ITEM",
    payload: { itemIndex, item },
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
