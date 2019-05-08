import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import * as ROUTES from "../constants/routes.js"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

const Router = () => {
  const { initialising, user } = useAuthState(auth)
  
  return (
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Home} />
      <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
    </Switch>
  )
}

export default Router

{
  /* import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"

const AuthGuard = ({ children }) => {
  const { initialising, user } = useAuthState(auth)
  if (initialising) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if(!user) {
    return (
      <div>Sorry plz login</div>
    )
  }

  if(user) {
    return <div user={user}>{children}</div>
  }
}

export default AuthGuard */
}
