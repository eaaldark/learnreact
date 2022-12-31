import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { viewMode } from "../../reducers/global/globalSlice"

const Login = () => {
  const navigate = useNavigate()

  const viewM = useAppSelector((state) => {
    return state.global
  })

  const dispatch = useAppDispatch()

  const handleComplete = () => {
    const result = dispatch(viewMode(viewM))
    if (result) {
      navigate("/home")
    }
  }

  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col items-center justify-center">
        <img
          className="w-96"
          src="https://play.tailwindcss.com/img/logo.svg"
          alt=""
        />
        <form className="flex w-80 flex-col gap-6">
          <div className="input-container">
            <input
              placeholder="example@example.com"
              className="generic-input peer"
              type="email"
              name="email"
              id="email"
            />
            <label className="generic-label" htmlFor="email">
              Email
            </label>
          </div>
          <div className="input-container flex gap-2">
            <input
              placeholder="**********"
              className="generic-input peer"
              type="password"
              name="password"
              id="password"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/OOjs_UI_icon_eye.svg"
              alt=""
            />
            <label className="generic-label" htmlFor="password">
              Password
            </label>
          </div>
          <p className="self-center">¿Olvidó sucontraseña?</p>

          {/* <Link className="" to="/home"> */}
          <input
            onClick={() => handleComplete()}
            type="submit"
            className="button-submit self-center"
            value="Iniciar Sesión"
          />
          {/* </Link> */}
        </form>
      </div>
    </div>
  )
}

export default Login
