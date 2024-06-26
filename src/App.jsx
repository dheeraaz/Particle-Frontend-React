import React from "react"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import AppLayout from "./Layouts/AppLayout"
import { HeaderLinks } from "./Constants/HeaderLinks.jsx"
import './i18n.js'

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      {HeaderLinks.map((item) => {
        return <Route key={item.id} path={item?.path} element={<item.component />} />
      })}
    </Route>
  )
)

function App() {

  return <RouterProvider router={myRouter} />
}

export default App
