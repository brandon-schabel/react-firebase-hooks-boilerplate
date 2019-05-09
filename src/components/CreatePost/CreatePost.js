import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { db, auth } from "../../firebase"
import { AuthGuard } from ".."

export const CreatePost = () => {
  const [text, setText] = useState("")
  const { user } = useAuthState(auth)

  const handleSubmitPost = event => {
    event.preventDefault()
    db.collection("posts").add({
      text,
      userId: user.uid
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <AuthGuard>
      <form onSubmit={handleSubmitPost}>
        <input onChange={e => setText(e.target.value)} value={text} />
        <input type="submit" value="Submit" />
      </form>
    </AuthGuard>
  )
}
