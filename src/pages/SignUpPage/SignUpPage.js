import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import {
  SignOutButton,
  GoogleLoginButton,
  EmailSignUpForm
} from "../../components"

export const SignUpPage = () => {
  const { user } = useAuthState(auth)

  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <SignOutButton />
      </div>
    )
  }
  return (
    <div>
      <EmailSignUpForm />

      <GoogleLoginButton />
    </div>
  )
}
