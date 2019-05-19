import React from 'react'
import { Redirect } from "react-router-dom"

export const HandleRedirect = ({ to, message }) => {
  return (
    <Redirect
      to={{
        pathname: to,
        state: { status: message }
      }}
    />
  )
}
