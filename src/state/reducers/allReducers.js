import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { shopReducer } from "./shopReducer";

export const allReducers = combineReducers({
    firebase: firebaseReducer,
    shop: shopReducer
})
