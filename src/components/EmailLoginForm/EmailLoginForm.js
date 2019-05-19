import React, { useState } from "react"
import { Redirect, Link} from "react-router-dom"

import { auth } from "../../firebase"
import * as ROUTES from "../../constants/routes"

export const EmailLoginForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [loginSuccess, setLoginSuccess] = useState("")
  const [error, setError] = useState(null)

  const handleLogin = event => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, pass)
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
          state: { status: "Successfully Logged In" }
        }}
      />
    )

  return (
    <form onSubmit={handleLogin}>
      {error && <div>Error: {error.message}</div>}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
    </form>
  )
}
