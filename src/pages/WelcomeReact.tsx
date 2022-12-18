import React from "react"
import logo from "../logo.svg"

const WelcomeReact = () => {
  return (
    <div className="">
      <header className="flex items-center">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex flex-col">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className=""
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </header>
    </div>
  )
}

export default WelcomeReact
