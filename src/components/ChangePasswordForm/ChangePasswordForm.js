import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../../firebase"
import { HandleRedirect } from "../index"
import * as ROUTES from "../../constants/routes"

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
      .then(() => {
        setNewPass("")
        setConfirmNewPass("")
        setFormSubmitted(true)
      })
      .catch(error => setError(error))
  }

  if (formSubmitted)
    return (
      <HandleRedirect
        to={ROUTES.LANDING}
        message={"Successfully changed password"}
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
