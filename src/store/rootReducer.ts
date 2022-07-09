import { combineReducers } from "@reduxjs/toolkit";
import { rootSlice } from "./ducks";

const rootReducer = combineReducers({
  root: rootSlice
});

export default rootReducer;
