import Image from 'next/image'
import Link from 'next/link'
import {FC, useEffect, useState} from 'react'
import {useSession} from 'next-auth/react'
import UserBtn from '../UserBtn'
import {MdClose, MdMenu} from 'react-icons/md'

interface NavbarMainProps {
  links: any
}
const NavbarMain: FC<NavbarMainProps> = ({links}) => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [click, setClick] = useState(false)
  const {data: session, status} = useSession()

  const handleClick = () => setClick(!click)

  useEffect(() => {
    const handleScroll = () => {
      setWindowHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={` fixed top-8 left-0 h-12 w-full text-slate-100 z-50 transition-colors duration-300 bg-slate-800`}
      x-component="navbar-main"
      id="navbar-main">
      <div
        className="relative container mx-auto px-4 flex flex-row"
        id="web-logo">
        <div className="flex justify-end w-full lg:hidden h-full py-4">
          <div onClick={handleClick}>{click ? <MdClose /> : <MdMenu />}</div>
        </div>
        <Link href={'/'}>
          <a className=" absolute bg-slate-800 w-max px-2 rounded-b-2xl shadow-xl z-50">
            <Image
              src={'/images/logo.png'}
              width={80}
              height={80}
              alt={'logo'}
            />
          </a>
        </Link>
        <div
          className={`#${
            click ? 'left-0 right-0' : '-left-full -right-full'
          } flex lg:flex-1 flex-col lg:flex-row lg:justify-end items-center py-6 lg:py-2 gap-5 absolute transition-all duration-500 ease-in-out lg:static top-10 lg:top-0 lg:h-auto h-max w-1/2 lg:w-auto mt-2 md:mt-0 bg-slate-800  justify-center rounded-b-lg lg:rounded-none`}>
          {links}
          {status != 'authenticated' && (
            <div
              className={
                ' nm-flat-slate-800 rounded-lg py-1 capitalize font-papyrus flex flex-row justify-center items-center divide-x-2 divide-amber-500 lg:w-auto'
              }>
              <Link href={'/auth/signin'}>
                <a className="px-2 hover:text-amber-400">login</a>
              </Link>
              <Link href={'/auth/credentials/credential-signup'}>
                <a className="px-2 hover:text-amber-400">register</a>
              </Link>
            </div>
          )}
          <UserBtn />
        </div>
      </div>
    </nav>
  )
}

export default NavbarMain

// flex flex-1 justify-end items-center py-2 gap-5
