import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../../firebase"

export const SignOutButton = props => {
  const [error, setError] = useState(null)
  const [user] = useAuthState(auth)

  const logout = () => {
    auth
      .signOut()
      .then(() => {})
      .catch(error => {
        setError(error)
      })
  }

  if (user) {
    return (
      <div>
        <div>{error && <div>Error: {error.message}</div>}</div>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
}
