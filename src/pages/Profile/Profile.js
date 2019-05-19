import React, { useContext } from "react"

import { AuthContext } from "../../firebase"
import { ChangePasswordForm, CreatePost, ViewPosts} from "../../components"

export const Profile = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <CreatePost></CreatePost>
      <ViewPosts></ViewPosts>
      {JSON.stringify(user)}
      <ChangePasswordForm />
    </div>
  )
}
