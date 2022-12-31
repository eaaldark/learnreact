import { BrowserRouter } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "./app/hooks"
import { viewMode } from "./reducers/global/globalSlice"

import "./App.scss"
import General from "./router"
import Sidebar from "./components/Sidebar"

const App = () => {
  const viewM = useAppSelector((state) => {
    return state.global
  })

  console.log("App.tsx", viewM)
  const dispatch = useAppDispatch()

  const handleComplete = () => {
    dispatch(viewMode(viewM))
  }

  return (
    <BrowserRouter>
      <div className="w-full flex flex-row bg-zinc-700 h-screen text-white">
        <Sidebar authView={viewM[0].authView} handleComplete={handleComplete} />
        <General authView={viewM[0].authView} handleComplete={handleComplete} />
      </div>
    </BrowserRouter>
  )
}

export default App
