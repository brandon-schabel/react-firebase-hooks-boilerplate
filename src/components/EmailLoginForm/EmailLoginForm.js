import React, { useState } from "react"
import { auth } from "../../firebase"
import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"

export const EmailLoginForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState(null)

  const handleLogin = (event) => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        setError(error)
      })
  }

  return (
    <form onSubmit={handleLogin}>
      {error && <div>Error: {error.message}</div>}
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <input type="submit" value="Submit" />
      <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
    </form>
  )
}
