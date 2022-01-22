const initialState = {
  isLoadingData: true,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.types) {
    case "LOADING-STATE":
      return {
        ...state,
        isLoadingData: action.payload,
      };
    case "UPDATE-DATA":
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
};
