import { createSlice } from "@reduxjs/toolkit";

const initialState=[
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];
const TodosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
    AddTodo: (state, action) => {
       const NewTodo={
         id:Date.now(),
         title:action.payload.title,
         completed:false,
       }
       state.push(NewTodo)
      },
      
    },
  });
  
  export const { AddTodo } = TodosSlice.actions;
  
  export default TodosSlice.reducer;
