import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./Layouts/AppLayout"
import { Home, About } from "./Modules"
import { HeaderLink } from "./Constants/HeaderLinks.jsx"

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      {HeaderLink.map((item) => {
        return <Route key={item.id} path={item.path} element={<item.component />} />
      })}
    </Route>
  )
)

function App() {

  return <RouterProvider router={myRouter} />
}

export default App
