import React, { useState } from "react"
import { Link } from "react-router-dom"

import { auth } from "../../firebase"
import * as ROUTES from "../../constants/routes"
import { HandleRedirect } from "../index"

export const EmailLoginForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [signInSuccess, setSignInSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = event => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        setSignInSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  if (signInSuccess)
    return (
      <HandleRedirect
        to={ROUTES.LANDING}
        message={"Successfully Logged In"}
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
