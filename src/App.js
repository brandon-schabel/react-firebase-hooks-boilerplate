import React from "react"
import LoginPage from "./pages/LoginPage"
import AuthGuardTest from "./components/AuthGuardTest"
import Router from './router/Router'

const App = () => {
  return (
    <div>
      <LoginPage />
      <AuthGuardTest />
      <Router></Router>
      test
    </div>
  )
}

export default App
