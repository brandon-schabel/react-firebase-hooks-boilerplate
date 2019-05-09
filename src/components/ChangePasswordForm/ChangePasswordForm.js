import React, { useState } from "react"
import { auth } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

export const ChangePasswordForm = () => {
  const [newPass, setNewPass] = useState("")
  const [confirmNewPass, setConfirmNewPass] = useState("")
  const [error, setError] = useState(null)
  const { user } = useAuthState(auth)

  const enabled = !(newPass.length > 5 && newPass === confirmNewPass)

  const handlePasswordUpdate = () => {
    // TODO: check current user password,
    // TODO: redirect on password change, or prompt success
    setNewPass('')
    setConfirmNewPass('')
    user
      .updatePassword(newPass)
      .then(response => {
        console.log(response)
      })
      .catch(error => setError(error))
  }

  return (
    <div>
      {error && <div>Error occured: {error} </div>}
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

      <button disabled={enabled} onClick={handlePasswordUpdate}>
        Change Password
      </button>
    </div>
  )
}
