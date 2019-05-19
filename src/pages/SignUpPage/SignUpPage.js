import React, { useContext } from "react"

import { AuthContext } from "../../firebase"
import {
  SignOutButton,
  GoogleLoginButton,
  EmailSignUpForm
} from "../../components"

export const SignUpPage = () => {

  const { user } = useContext(AuthContext)
  console.log('signup')
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
