import Links from '@/data/defaultLinks.json'
import Link from 'next/link'
import {Router, useRouter} from 'next/router'
import {useEffect, useState} from 'react'

const DefaultLinks = () => {
  const {asPath} = useRouter()
  const router = useRouter()
  useEffect(() => {
    // Test for the ugliness.
    if (window.location.hash === '#_=_') {
      router.push({pathname: '/sale'})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])
  return (
    <div>
      <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-1">
        {Links.map((link, i) => {
          return (
            <li
              className="tracking-wide uppercase h-full w-[7.5rem] text-center cursor-pointer"
              key={i}>
              <Link href={link.href}>
                <a
                  className={`${
                    asPath == link.href ? 'text-amber-500' : 'text-slate-100'
                  }`}>
                  {link.linkName}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DefaultLinks
