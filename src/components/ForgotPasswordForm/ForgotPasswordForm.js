import React, { useState } from "react"
import { Redirect } from "react-router-dom"

import { auth } from "../../firebase"
import * as ROUTES from "../../constants/routes"

export const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("")
  const [sentSuccess, setSentSuccess] = useState(false)
  const [error, setError] = useState(null)

  const handleSendEmail = event => {
    event.preventDefault()

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setSentSuccess(true)
      })
      .catch(error => {
        setError(error)
      })
  }

  if (setSentSuccess)
    return (
      <Redirect
        to={{
          pathname: ROUTES.LANDING,
          state: { status: "Please check your email for a password reset link" }
        }}
      />
    )

  return (
    <form onSubmit={handleSendEmail}>
      {error && <div>Error: {error.message}</div>}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="submit" value="Submit" disabled={sentSuccess} />
    </form>
  )
}
