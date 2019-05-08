import React from "react"
import LoginPage from "./pages/LoginPage"
import SignUpPage from './pages/SignUpPage'
import AuthGuardTest from "./components/AuthGuardTest"
import Router from './router/Router'

const App = () => {
  return (
    <div>
      <LoginPage />
      <SignUpPage></SignUpPage>
      <AuthGuardTest />
      <Router></Router>
      test
    </div>
  )
}

export default App
