import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../../firebase"

export const AuthGuard = ({ children }) => {
  const [user] = useAuthState(auth)

  if (!user) {
    return <div>Sorry plz login</div>
  }

  if (user) {
    return children
  }
}
