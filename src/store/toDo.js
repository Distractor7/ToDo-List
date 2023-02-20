import { createSlice } from "@reduxjs/toolkit";

//Below the slice object is created and exported.
export const toDoSlice = createSlice({
  name: "toDo",

  initialState: {
    nextId: 2,
    data: {
      1: {
        content: "Content 1",
        completed: false,
      },
    },
  },

  //Below the reducers are declared and defined.
  reducers: {
    add: (state, action) => {
      const { content } = action.payload;
      const id = state.nextId;
      state.nextId += 1;
      state.data[id] = {
        content: content,
        completed: false,
      };
    },
    remove: (state, action) => {
      const id = action.payload;
      delete state.data[id];
    },
    edit: (state, action) => {
      const { id, content } = action.payload;
      state.data[id].content = content;
    },
    completed: (state, action) => {
      const id = action.payload;
      state.data[id].completed = !state.data[id].completed;
    },
  },
});

//The reducers are exported here to be used as actions in the App.js page.
export const { add, remove, edit, completed } = toDoSlice.actions;

export default toDoSlice.reducer;
