import React, { useState } from "react"

import { auth, googleProvider } from "../../firebase"
import * as ROUTES from "../../constants/routes"
import { HandleRedirect } from "../index"

export const GoogleLoginButton = () => {
  const [loginSuccess, setLoginSuccess] = useState("")
  const [error, setError] = useState(null)

  const signInGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(() => {
        setLoginSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  if (loginSuccess)
    return (
      <HandleRedirect
        to={ROUTES.LANDING}
        message={"Successfully Logged In With Google"}
      />
    )

  return (
    <div>
      <div>{error && <div>Error: {error.message}</div>}</div>
      <button onClick={signInGoogle}>Google Sign In</button>
    </div>
  )
}
