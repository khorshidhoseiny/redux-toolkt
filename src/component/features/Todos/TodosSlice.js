import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const Response = await axios.get("http://localhost:3001/todos");
      return Response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
const TodosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      const NewTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(NewTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodos: (state, action) => {
      const filteredTodos = state.todos.filter(
        (t) => t.id != action.payload.id
      );
      state.todos = filteredTodos;
    },
  },
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false, error: null };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: action.payload, loading: true, error: null };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export const { AddTodo, toggleTodos, deleteTodos } = TodosSlice.actions;

export default TodosSlice.reducer;
