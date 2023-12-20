'use client'
import { useSession, signIn, signOut } from 'next-auth/react'

const SignInComponent = () => {
  const { data: session, status, update } = useSession()

  if (status === 'authenticated') {
    return (
      <div>
        <h1>Welcome, {session.user?.name}!</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => signIn('github')}>Sign in with GitHub</button>
    </div>
  )
}

export default SignInComponent
