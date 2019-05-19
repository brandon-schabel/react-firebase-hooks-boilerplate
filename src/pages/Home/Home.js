import React from "react"

export const Home = ({ location: { state } }) => {
  let status = null
  
  if (state && state.hasOwnProperty("status")) {
    status = state.status
  }

  return (
    <div>
      <div>Home</div>
      {status && <p>{status}</p>}
    </div>
  )
}
