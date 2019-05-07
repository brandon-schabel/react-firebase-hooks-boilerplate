import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import SignOutButton from '../components/SignOutButton'
import GoogleLoginButton from '../components/GoogleLoginButton'
import EmailLoginForm from '../components/EmailLoginForm'

const LoginPage = () => {
  const { initialising, user } = useAuthState(auth)

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
        <SignOutButton></SignOutButton>
      </div>
    )
  }
  return (
    <div>
      <EmailLoginForm></EmailLoginForm>
      <GoogleLoginButton></GoogleLoginButton>
    </div>
  )
}

export default LoginPage
