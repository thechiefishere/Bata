const initialState = {
  isLoadingData: true,
  products: [],
  cartItems: [],
  showEditModal: false,
  itemToEdit: {},
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
        (item, index) => index !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    case "UPDATE_ITEM_TO_EDIT":
      const item = state.cartItems[action.payload];
      return {
        ...state,
        itemToEdit: item,
      };
    case "SHOW_EDIT_MODAL":
      return {
        ...state,
        showEditModal: true,
      };
    case "HIDE_EDIT_MODAL":
      return {
        ...state,
        showEditModal: false,
      };
    case "EDIT_CART_ITEM":
      const updatedCartItem = state.cartItems.map((item, index) => {
        if (index === action.payload.index) return action.payload.item;
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItem,
      };
    default:
      return state;
  }
};
