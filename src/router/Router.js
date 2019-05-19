import React from "react"
import { Switch, Route } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../firebase"
import * as ROUTES from "../constants/routes.js"
import {
  Home,
  LoginPage,
  SignUpPage,
  Profile,
  ForgotPasswordPage
} from "../pages"

const Router = () => {
  const [user, loading] = useAuthState(auth)
  
  if (loading) {
    return <div>Loading...</div>
  } else {
    if (!user) {
      return (
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={LoginPage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route
            exact
            path={ROUTES.FORGOT_PASSWORD}
            component={ForgotPasswordPage}
          />
        </Switch>
      )
    }

    if (user) {
      return (
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route exact path={ROUTES.PROFILE} component={Profile} />
        </Switch>
      )
    }
  }
}

export default Router
