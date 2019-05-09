import React, { useState } from "react"
import { auth, googleProvider } from "../../firebase"

export const GoogleLoginButton = () => {
  const [error, setError] = useState(null)
  const signInGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        setError(error)
      })
  }

  return (
    <div>
      <div>{error && <div>Error: {error.message}</div>}</div>
      <button onClick={signInGoogle}>Google Sign In</button>
    </div>
  )
}
