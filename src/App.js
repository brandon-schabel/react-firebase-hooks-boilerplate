import React from "react"
import {LoginPage, SignUpPage} from './pages'
import Router from './router/Router'

const App = () => {
  return (
    <div>
      <LoginPage />
      <SignUpPage></SignUpPage>
      <Router></Router>
      test
    </div>
  )
}

export default App
