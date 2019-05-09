import React, { useState } from "react"
import { auth } from "../../firebase"

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

  return (
    <form onSubmit={handleSendEmail}>
      {error && <div>Error: {error.message}</div>}
      {sentSuccess && (
        <div>Please check your email for a password reset link</div>
      )}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="submit" disabled={sentSuccess} value="Submit" />
    </form>
  )
}
