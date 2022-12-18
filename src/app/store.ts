import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import tasksReducer from "../reducers/tasks/taskSlice"

export const store = configureStore({
  reducer: { tasks: tasksReducer },
})

console.log(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
