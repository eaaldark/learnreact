import { BrowserRouter, Route, Routes } from "react-router-dom"
import TaskForm from "./components/TaskForm"
import TasksList from "./components/TasksList"
import "./App.scss"
import WelcomeReact from "./pages/WelcomeReact"

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex flex-col gap-4 items-center justify-center h-full">
        {/* <WelcomeReact /> */}
        <h1 className="text-5xl">Tasks App</h1>
        <p>Create with CRA, Typescript, TailwindCSS, Redux, Redux Toolkit</p>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<TasksList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
