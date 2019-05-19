import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"

import * as ROUTES from "../constants/routes.js"
import { AuthContext } from "../firebase"
import {
  Home,
  LoginPage,
  SignUpPage,
  Profile,
  ForgotPasswordPage
} from "../pages"

const Router = () => {
  const { loading, user } = useContext(AuthContext)
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
