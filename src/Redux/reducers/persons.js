import { FETCH_PERSONS } from "../constants";

export const persons = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PERSONS:
      return { persons: action.payload };
    default:
      return state;
  }
};
