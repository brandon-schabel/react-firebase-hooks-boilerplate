import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"

export const SignOutButton = () => {
  const { user } = useAuthState(auth)
  const logout = () => auth.signOut()

  if (user) {
    return (
      <div>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
}
