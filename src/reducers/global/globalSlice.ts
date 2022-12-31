import { createSlice } from "@reduxjs/toolkit"

interface IGlobalView {
  id: string
  authView: boolean
}

const initialState: [IGlobalView] = [
  {
    id: "f2d00186-1edf-4380-8af5-99e1131fe9df",
    authView: true,
  },
]

export const globalSlice = createSlice({
  name: "globalView",
  initialState,
  reducers: {
    //Mostrara y/o ocultara el sidebar segun el caso
    viewMode: (state, action) => {
      const array: [IGlobalView] = action.payload
      const found = state.find((g) => g.id === array[0].id)
      if (found) {
        found.authView = !found.authView
      }
    },
  },
})

export const { viewMode } = globalSlice.actions
export default globalSlice.reducer
