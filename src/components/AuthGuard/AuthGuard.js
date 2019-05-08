import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"

export const AuthGuard = ({ children }) => {
  const { initialising, user } = useAuthState(auth)
  if (initialising) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <div>Sorry plz login</div>
  }

  if (user) {
    return children
  }
}
