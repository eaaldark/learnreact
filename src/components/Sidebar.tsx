import { Link } from "react-router-dom"
import Icons from "./assets"

const Sidebar = ({ authView, handleComplete }: any) => {
  return (
    <>
      {authView ? null : (
        <aside className="w-80 h-full bg-zinc-100 ">
          {/* <aside className="w-32 hover:w-80 h-full bg-zinc-100 transition-all duration-500"> */}
          <ul className="flex flex-col">
            <li className="bg-green-500 px-4 py-2 hover:bg-zinc-700 flex flex-row gap-3">
              <img src={Icons.Home} className="w-10" alt="" />
              <Link to="/home">Home</Link>
            </li>
            <li className="bg-green-500 px-4 py-2 hover:bg-zinc-700 flex flex-row gap-3">
              <img src={Icons.Home} className="w-10" alt="" />
              <Link to="/other">Other</Link>
            </li>
            <li
              className="bg-red-500 px-4 py-2 hover:bg-zinc-700 flex flex-row gap-3"
              onClick={() => {
                handleComplete()
              }}>
              <img src={Icons.Home} className="w-10" alt="" />
              <Link to="/">logout</Link>
            </li>
          </ul>
        </aside>
      )}
    </>
  )
}

export default Sidebar
