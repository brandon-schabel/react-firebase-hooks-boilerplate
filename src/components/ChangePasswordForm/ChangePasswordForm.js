import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Redirect } from "react-router-dom"

import { auth } from "../../firebase"

export const ChangePasswordForm = () => {
  const [newPass, setNewPass] = useState("")
  const [confirmNewPass, setConfirmNewPass] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [user] = useAuthState(auth)

  const enabled = !(
    newPass.length > 5 &&
    newPass === confirmNewPass &&
    !formSubmitted
  )

  const handleChangePassword = event => {
    event.preventDefault()
    user
      .updatePassword(newPass)
      .then(response => {
        setNewPass("")
        setConfirmNewPass("")
        setFormSubmitted(true)
        console.log(response)
      })
      .catch(error => setError(error))
  }

  if (setFormSubmitted)
    return (
      <Redirect
        to={{
          pathname: "/",
          state: { status: "Successfully Changed Password" }
        }}
      />
    )

  return (
    <form onSubmit={handleChangePassword}>
      {error && <div>Error occured: {error.message} </div>}
      <input
        type="password"
        value={newPass}
        onChange={e => setNewPass(e.target.value)}
      />
      <input
        type="password"
        value={confirmNewPass}
        onChange={e => setConfirmNewPass(e.target.value)}
      />

      <input disabled={enabled} type="submit" value="Submit" />
    </form>
  )
}
