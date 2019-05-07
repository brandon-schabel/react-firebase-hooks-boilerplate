import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

const SignOutButton = () => {
  const { initialising, user } = useAuthState(auth)
  const logout = () => auth.signOut()

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
}

export default SignOutButton
