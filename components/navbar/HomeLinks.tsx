import Links from '@/data/homeLinks.json'
import {Link as ReactLink} from 'react-scroll'
const HomeLinks = () => {
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-1">
        {Links.map((link, i) => {
          return (
            <li
              className="tracking-wide uppercase h-full w-[7.5rem] text-center cursor-pointer"
              key={i}>
              <ReactLink
                to={link.href}
                spy={true}
                smooth={true}
                duration={900}
                offset={0}
                activeClass={`text-yellow-500`}>
                {link.linkName}
              </ReactLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HomeLinks
