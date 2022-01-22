const initialState = {
  isLoadingData: true,
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.types) {
    case "UPDATE-DATA":
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
};
