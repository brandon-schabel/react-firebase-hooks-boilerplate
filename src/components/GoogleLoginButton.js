import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, googleProvider } from "../firebase"


const GoogleLoginButton = () => {
  const { initialising, user } = useAuthState(auth)

  const signInGoogle = () => auth.signInWithPopup(googleProvider)

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }

  return (
      <button onClick={signInGoogle}>Google Sign In</button>
  )
}

export default GoogleLoginButton
