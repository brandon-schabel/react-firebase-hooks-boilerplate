import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, firebaseApp, googleProvider } from "./firebase"

const Login = () => {
  const { initialising, user } = useAuthState(auth)
  const login = () =>
    auth.signInWithEmailAndPassword("test@test.com", "password")
  const logout = () => auth.signOut()

  const signInGoogle = () => auth.signInWithPopup(googleProvider)

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={login}>Log in</button>;
      <button onClick={signInGoogle}>Google Sign In</button>
    </div>
  )
}

export default Login
