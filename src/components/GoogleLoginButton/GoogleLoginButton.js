import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { auth, googleProvider } from "../../firebase"
import * as ROUTES from "../../constants/routes"

export const GoogleLoginButton = () => {
  const [loginSuccess, setLoginSuccess] = useState("")
  const [error, setError] = useState(null)

  const signInGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(response => {
        setLoginSuccess(true)
        console.log(response)
      })
      .catch(error => {
        setError(error)
      })
  }

  if (loginSuccess)
    return (
      <Redirect
        to={{
          pathname: ROUTES.LANDING,
          state: { status: "Successfully Logged In With Google" }
        }}
      />
    )

  return (
    <div>
      <div>{error && <div>Error: {error.message}</div>}</div>
      <button onClick={signInGoogle}>Google Sign In</button>
    </div>
  )
}
