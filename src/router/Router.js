import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import * as ROUTES from "../constants/routes.js"
import Home from "../pages/Home"
import LoginPage from "../pages/LoginPage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import Profile from '../pages/Profile'

const Router = () => {
  const { initialising, user } = useAuthState(auth)

  if (!user) {
    return (
      <Switch>
        <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
      </Switch>
    )
  }

  if(user) {
    return (
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Home} />
        <Route exact path={ROUTES.PROFILE} component={Profile} />
      </Switch>
    )
  }
}

export default Router
