import { Route, Routes } from "react-router-dom"
import route from "./routes"

const General = ({ authView, handleComplete }: any) => {
  return (
    <>
      <Routes>
        {authView ? (
          // {viewM[0].authView ? (
          <>
            {(route.authRoutes || []).map((item: any, idx: any) => (
              <Route key={idx} path={item.path} element={<item.component />} />
            ))}
            {/* <Route
              path="/"
              element={<LazyLogin handleComplete={handleComplete} />}
            /> */}
          </>
        ) : (
          <>
            {(route.routes || []).map((item: any, idx: any) => (
              <Route key={idx} path={item.path} element={<item.component />} />
            ))}
          </>
        )}
      </Routes>
    </>
  )
}
export default General
