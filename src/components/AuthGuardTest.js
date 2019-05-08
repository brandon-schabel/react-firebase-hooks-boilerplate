import React from 'react'
import AuthGuard from './AuthGuard'

const AuthGuardTest = () => {
  return (
    <AuthGuard>
      this is AuthGuarded
    </AuthGuard>
  )
}

export default AuthGuardTest
