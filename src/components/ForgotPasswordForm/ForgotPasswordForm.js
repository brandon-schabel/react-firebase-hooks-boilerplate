import React, { useState } from "react"

import { auth } from "../../firebase"
import * as ROUTES from "../../constants/routes"
import { HandleRedirect } from "../index"

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

  if (sentSuccess)
    return (
      <HandleRedirect
        to={ROUTES.LANDING}
        message={"Please check your e-mail for a password reset link."}
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
