import { Home, Other, Login } from "./LazyPages"

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "other",
    path: "/other",
    component: Other,
  },
]

const authRoutes = [
  {
    name: "login",
    path: "/",
    component: Login,
  },
]

const route = { routes, authRoutes }
export default route
