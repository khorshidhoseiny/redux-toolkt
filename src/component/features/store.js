import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import TodosReducer from './Todos/TodosSlice'

export const store = configureStore({
  reducer: {
      counter:counterReducer,
      todo:TodosReducer,
  },
})