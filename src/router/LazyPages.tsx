import { lazy, Suspense } from "react"

const LazyHome = lazy(() => import("../pages/generic/Home"))
const LazyOther = lazy(() => import("../pages/generic/Other"))
const LazyLogin = lazy(() => import("../pages/auth/Login"))

export const Home = () => {
  return (
    <Suspense fallback={<div className="text-red-700">Cargando Home...</div>}>
      <LazyHome />
    </Suspense>
  )
}

export const Other = () => {
  return (
    <Suspense fallback={<div className="text-red-700">Cargando Otro...</div>}>
      <LazyOther />
    </Suspense>
  )
}

export const Login = ({ ...props }) => {
  return (
    <Suspense fallback={<div className="text-red-700">Cargando Login...</div>}>
      <LazyLogin {...props} />
    </Suspense>
  )
}
