import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"
import { AuthGuard, ChangePasswordForm, CreatePost, ViewPosts} from "../../components"

export const Profile = () => {
  const { initialising, user } = useAuthState(auth)

  return (
    <div>
      <CreatePost></CreatePost>
      <ViewPosts></ViewPosts>
      {JSON.stringify(user)}
      <ChangePasswordForm />
    </div>
  )
}
