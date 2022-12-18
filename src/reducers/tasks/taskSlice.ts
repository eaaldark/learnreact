import { createSlice } from "@reduxjs/toolkit"

interface IPhone {
  number: string
}

interface ITask {
  id: string
  title: string
  completed: boolean
  description: string
  createAt: string
  phone: IPhone[]
}

const initialState: ITask[] = [
  {
    title: "Search PS5 Controller",
    description: "The control must be black",
    phone: [
      {
        number: "+573168475689",
      },
      {
        number: "+573145527133",
      },
    ],
    createAt: "2022-12-18T19:34:35.497Z",
    completed: false,
    id: "71d52df7-04dd-4726-bbaf-387754e578d8",
  },
  {
    title: "Shopping",
    description: "Making a shopping list for the end of the month",
    phone: [
      {
        number: "+984516546215",
      },
      {
        number: "+321564878615",
      },
    ],
    createAt: "2022-04-13T11:00:35.497Z",
    completed: false,
    id: "f2d00186-1edf-4380-8af5-99e1131fe9df",
  },
]

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(state, action, action.type, action.payload)
      state.push(action.payload)
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload
      const foundTask = state.find((task) => task.id === id)
      if (foundTask) {
        foundTask.title = title
        foundTask.description = description
      }
    },
    completeTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload)
      if (foundTask) {
        foundTask.completed = !foundTask.completed
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find((task) => task.id === action.payload)
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1)
      }
    },
  },
})

export const { addTask, editTask, deleteTask, completeTask } = taskSlice.actions
export default taskSlice.reducer
