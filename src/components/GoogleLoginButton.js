import React from "react"
import { auth, googleProvider } from "../firebase"


const GoogleLoginButton = () => {
  const signInGoogle = () => auth.signInWithPopup(googleProvider)

  return (
      <button onClick={signInGoogle}>Google Sign In</button>
  )
}

export default GoogleLoginButton
