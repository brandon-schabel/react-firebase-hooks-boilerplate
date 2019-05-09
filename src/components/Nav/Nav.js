import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import { SignOutButton } from "../"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"

const Authenticated = () => {
  return (
    <div>
      <Link to={ROUTES.PROFILE}>Profile</Link>
      <SignOutButton />
    </div>
  )
}

const NotAuthenticated = () => {
  return (
    <div>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>
  )
}

export const Nav = () => {
  const { user } = useAuthState(auth)

  if (user) return <Authenticated />

  if (!user) return <NotAuthenticated />
}
