import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./Layouts/AppLayout"
import { headerLinks } from "./Constants/headerLinks.js"

// Setting up the router for whole app
// Router path and element to be rendered are imported from ./Constants/headerLinks.js
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      {headerLinks.map((item) => {
        return <Route key={item.id} path={item?.path} element={<item.component />} />
      })}
    </Route>
  )
)

function App() {

  return <RouterProvider router={myRouter} />
}

export default App
