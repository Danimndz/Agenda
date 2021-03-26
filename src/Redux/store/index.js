import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persons } from "../reducers/persons";


const initialState = {
  persons: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persons,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);