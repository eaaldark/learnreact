import { useAppSelector, useAppDispatch } from "../app/hooks"
import { Link } from "react-router-dom"
import { deleteTask, completeTask } from "../reducers/tasks/taskSlice"

const TasksList = () => {
  const tasks = useAppSelector((state) => {
    return state.tasks
  })
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }

  const handleComplete = (id: string) => {
    dispatch(completeTask(id))
  }
  console.log(tasks)
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks ({tasks.length})</h1>

        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm">
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-3">
        {tasks.map((task) => (
          <div
            className="bg-neutral-800 p-4 rounded-md flex flex-col"
            key={task.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md">
                  delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
            <p className="text-xs text-slate-400">{task.id}</p>
            <p className="text-xs text-slate-300">{task.createAt}</p>
            <div className="w-full flex flex-row-reverse gap-2">
              <button
                onClick={() => handleComplete(task.id)}
                className={`rounded-full w-6 h-6 ${
                  task.completed ? "bg-lime-600" : "bg-red-600"
                }`}></button>
              <p>Status</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TasksList
