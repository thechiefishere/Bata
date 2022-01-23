const initialState = {
  isLoadingData: true,
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING-STATE":
      return {
        ...state,
        isLoadingData: action.payload,
      };
    case "UPDATE-DATA":
      return {
        ...state,
        products: action.payload,
      };
  }
  return state;
};
