import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import Router from "./router/Router"
import { Nav } from "./components"
import { auth, AuthContext } from "./firebase"

const App = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <AuthContext.Provider value={{ user, loading, error }}>
      <Nav />
      <Router />
    </AuthContext.Provider>
  )
}

export default App
