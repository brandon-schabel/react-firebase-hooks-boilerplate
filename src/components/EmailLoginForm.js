import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import SignOutButton from './SignOutButton'

const EmailLoginForm = () => {
  const { initialising, user } = useAuthState(auth)
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const login = () => auth.signInWithEmailAndPassword(email, pass)
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
  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={pass} onChange={e => setPass(e.target.value)} />
      <button onClick={login}>Log in</button>;
    </div>
  )
}

export default EmailLoginForm
