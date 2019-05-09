import React from "react"
import { auth, googleProvider } from "../../firebase"

export const GoogleLoginButton = () => {
  const signInGoogle = () => auth.signInWithPopup(googleProvider)

  return <button onClick={signInGoogle}>Google Sign In</button>
}
