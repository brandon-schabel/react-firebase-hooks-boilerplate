import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { db, auth } from "../../firebase"
import { AuthGuard } from ".."

export const CreatePost = () => {
  const [text, setText] = useState("")
  const [error, setError] = useState(null)
  const [user] = useAuthState(auth)

  const handleSubmitPost = event => {
    event.preventDefault()
    db.collection("posts")
      .add({
        text,
        userId: user.uid
      })
      .then(() => {})
      .catch(error => {
        setError(error)
      })
  }

  return (
    <AuthGuard>
      {error && <div>Error Occured: {error}</div>}
      <form onSubmit={handleSubmitPost}>
        <input onChange={e => setText(e.target.value)} value={text} />
        <input type="submit" value="Create Post" />
      </form>
    </AuthGuard>
  )
}
