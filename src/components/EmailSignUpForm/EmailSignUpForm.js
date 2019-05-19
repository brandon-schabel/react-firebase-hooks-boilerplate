import React, { useState } from "react"

import { auth } from "../../firebase"
import * as ROUTES from "../../constants/routes"
import { HandleRedirect } from "../index"

export const EmailSignUpForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSignUp = event => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        setSignUpSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  if (signUpSuccess)
    return (
      <HandleRedirect
        to={ROUTES.LANDING}
        message={"Successfully Signed Up"}
      />
    )

  const enabled = !(pass.length > 5 && pass === confirmPass)
  return (
    <form onSubmit={handleSignUp}>
      {error && <div>Error: {error.message}</div>}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <input
        type="password"
        value={confirmPass}
        onChange={e => setConfirmPass(e.target.value)}
      />
      <input disabled={enabled} type="submit" value="Submit" />
    </form>
  )
}
