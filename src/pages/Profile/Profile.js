import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { AuthGuard, ChangePasswordForm } from "../../components"

export const Profile = () => {
  const { initialising, user } = useAuthState(auth)

  return (
    <div>
      <ChangePasswordForm />
      {JSON.stringify(user)}
    </div>
  )
}
