import React from "react"

export const Home = ({ location: { state } }) => {
  let status = ''
  if (state && state.hasOwnProperty("status")) {
    status = state.status
  }

  return (
    <div>
      Home
      {status}
    </div>
  )
}
