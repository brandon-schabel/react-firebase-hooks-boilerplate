import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "../../firebase"
import { ChangePasswordForm, CreatePost, ViewPosts} from "../../components"

export const Profile = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
      <CreatePost></CreatePost>
      <ViewPosts></ViewPosts>
      {JSON.stringify(user)}
      <ChangePasswordForm />
    </div>
  )
}
