import React, { useState } from "react"
import { auth, firebaseApp } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const ChangePassword = () => {
  const [newPass, setNewPass] = useState("")
  const [confirmNewPass, setConfirmNewPass] = useState("")
  const { initialising, user } = useAuthState(auth)

  const enabled = !(newPass.length > 5 && newPass === confirmNewPass)

  const handlePasswordUpdate = () => {
    // TODO: check current user password,
    // TODO: handle wrong pass/error check,
    // TODO: redirect on password change, or prompt success
    user.updatePassword(newPass)
  }
  
  return (
    <div>
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

export default ChangePassword
