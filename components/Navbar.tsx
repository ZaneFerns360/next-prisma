import Link from 'next/link'
import Image from 'next/image'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'
import { getServerAuthSession } from '@app/api/auth/[...nextauth]/route'

interface NavbarProps {
  children?: React.ReactNode
  fluid?: boolean
  rounded?: boolean
}

async function Nav() {
  const session = await getServerAuthSession()

  return (
    <div className="w-full bg-blue-700">
      <Navbar fluid rounded>
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <div className="mr-3 h-3 sm:h-9">
            {' '}
            <Image
              src="/next.svg"
              alt="Flowbite React Logo"
              height={200}
              width={300}
            />
          </div>

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink as={Link} href="#">
            About
          </NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
          <NavbarLink href={session ? '/api/auth/signout' : '/api/auth/signin'}>
            {' '}
            {session ? 'Sign out' : 'Sign in'}
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  )
}

export default Nav
