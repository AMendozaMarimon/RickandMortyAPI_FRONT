import { ADD_FAV, REMOVE_FAV } from "./actions.js";

const initialState = {
  myFavorite: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorite: payload };
    case REMOVE_FAV:
      return { ...state, myFavorite: payload };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
