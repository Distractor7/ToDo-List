import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDo";

//Below the intitialState is defined for the to do list items that will be created.
const initialState = {
  toDo: {
    nextId: 1,
    data: {},
  },
};

//Below the store is created using configureStore function
const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
  preloadedState: initialState,
});

//Below the store exported.
export default store;
