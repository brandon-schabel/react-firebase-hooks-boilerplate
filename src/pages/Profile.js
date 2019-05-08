import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from '../firebase'
const Profile = () => {
  const { initialising, user } = useAuthState(auth)

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default Profile
