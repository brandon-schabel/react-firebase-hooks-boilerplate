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
      .catch(e => {
        setError(e)
      })
  }

  return (
    <form onSubmit={handleSendEmail}>
      {sentSuccess && (
        <div>Please check your email for a password reset link</div>
      )}
      {error && <div>Sorry there was an error: {JSON.stringify(error)}</div>}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="submit" disable={sentSuccess} value="Submit" />
    </form>
  )
}
