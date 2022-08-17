import SidebarContext from '@/context/SidebarContext'
import whitePaperLinks from '@/data/whitePaperLinks.json'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useContext} from 'react'
const Sidebar = () => {
  const {asPath} = useRouter()
  const {isOpen} = useContext(SidebarContext)

  return (
    <div
      className={`${
        isOpen ? 'left-0' : '-left-full'
      } absolute lg:static lg:w-56 transition-all duration-300 z-40`}>
      <div
        className={` fixed bg-slate-800 pt-24 pb-10 shadow-xl  top-12`}
        style={{minHeight: 'calc(100vh)'}}>
        <ul className="flex flex-col items-center gap-6 px-4">
          {whitePaperLinks.map((links, i) => {
            return (
              <li key={i} className={'font-papyrus uppercase text-sm'}>
                <Link href={links.href}>
                  <a
                    className={`${
                      asPath == links.href ? 'text-amber-500' : 'text-slate-100'
                    }`}>
                    {links.linkName}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
