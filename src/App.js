import React from "react"

import Router from "./router/Router"
import { Nav } from "./components"
import { auth } from './firebase'

const App = () => {

  return (
    <div>
      <Nav />
      <Router />
    </div>
  )
}

export default App
