import { createSlice } from "@reduxjs/toolkit";

export interface TodoState {
  id: string;
  title: string;
  isDone: boolean;
}

const initialState: TodoState[] = [
  {
    id: "1",
    title: "one",
    isDone: false,
  },
  {
    id: "2",
    title: "two",
    isDone: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      state.push({
        id: "3",
        title: "three",
        isDone: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
