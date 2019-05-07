import React, { useState } from "react"
import { auth } from "../firebase"

const EmailLoginForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const login = () => auth.signInWithEmailAndPassword(email, pass)

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={pass} onChange={e => setPass(e.target.value)} />
      <button onClick={login}>Log in</button>;
    </div>
  )
}

export default EmailLoginForm
