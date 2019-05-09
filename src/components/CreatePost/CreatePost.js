import React, { useState } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { db, auth } from "../../firebase"
import { AuthGuard } from ".."

export const CreatePost = () => {
  const [text, setText] = useState("")
  const { error, loading, value } = useCollection(db.collection("posts"))
  const { initialising, user } = useAuthState(auth)

  const handleSubmitPost = event => {
    event.preventDefault()
    db.collection("posts").add({
      text,
      userId: user.uid
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
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
