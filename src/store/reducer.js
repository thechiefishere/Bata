const initialState = {
  isLoadingData: true,
  products: [],
  cartItems: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_STATE":
      return {
        ...state,
        isLoadingData: action.payload,
      };
    case "UPDATE_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    default:
      return state;
  }
};
