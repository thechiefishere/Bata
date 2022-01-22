const initialState = {
  data: [],
};

export default reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        data: actions.payload,
      };
    default:
      return state;
  }
};
