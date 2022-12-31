import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import globalReducer from "../reducers/global/globalSlice"
import tasksReducer from "../reducers/tasks/taskSlice"

export const store = configureStore({
  devTools: true,
  reducer: { tasks: tasksReducer, global: globalReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
