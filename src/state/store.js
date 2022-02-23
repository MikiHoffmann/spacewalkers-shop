import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allReducers } from "./reducers/allReducers";
import { initialState } from "./initialState";

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
