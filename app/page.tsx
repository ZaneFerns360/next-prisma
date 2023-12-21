'use client'
import Image from 'next/image'
import SignInComponent from '@components/SignIn'
import { SessionProvider } from 'next-auth/react'
import Nav from '@components/Navbar'

export default function Home() {
  return (
    <main className="h-full w-full">
      <SessionProvider>
        <Nav />
        <SignInComponent />
      </SessionProvider>{' '}
    </main>
  )
}
