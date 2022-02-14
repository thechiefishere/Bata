import { isItemInCart } from "../util/functions";

const initialState = {
  isLoadingData: true,
  products: [],
  cartItems: [],
  showEditModal: false,
  itemToEdit: {},
  showSidebar: false,
  clickedProductId: -1,
  showItemModal: false,
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
      if (isItemInCart(action.payload, state.cartItems)) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (action.payload.id === item.id) {
            item.quantity = item.quantity + 1;
            return item;
          }
          return item;
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    case "UPDATE_ITEM_TO_EDIT":
      const item = state.cartItems.find((val) => val.id === action.payload);
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
      if (isItemInCart(action.payload.item, state.cartItems)) {
        let updatedCartItems = state.cartItems.map((item) => {
          if (action.payload.item.id === item.id) {
            item.quantity = item.quantity + action.payload.item.quantity;
            return item;
          }
          return item;
        });
        updatedCartItems = updatedCartItems.filter(
          (item, index) => index != action.payload.itemIndex
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      const updatedCartItem = state.cartItems.map((item, index) => {
        if (index === action.payload.itemIndex) return action.payload.item;
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItem,
      };
    case "SHOW_SIDEBAR":
      return {
        ...state,
        showSidebar: true,
      };
    case "HIDE_SIDEBAR":
      return {
        ...state,
        showSidebar: false,
      };
    case "CHANGE_CLICKED_PRODUCT":
      return {
        ...state,
        clickedProductId: action.payload,
      };
    case "SHOW_ITEM_MODAL":
      return {
        ...state,
        showItemModal: true,
      };
    case "HIDE_ITEM_MODAL":
      return {
        ...state,
        showItemModal: false,
      };
    default:
      return state;
  }
};
