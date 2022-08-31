import useTranslation from 'next-translate/useTranslation'
import {Link as ReactLink} from 'react-scroll'
const HomeLinks = () => {
  const {t} = useTranslation('home')

  const homeLinks = [
    {
      linkName: t('Tokenomics'),
      href: 'tokenomics',
    },
    {
      linkName: t('Roadmap'),
      href: 'roadmap',
    },
    {
      linkName: t('OurPartners'),
      href: 'partner',
    },
    {
      linkName: t('OurTeam'),
      href: 'our-team',
    },
  ]
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-1">
        {homeLinks.map((link, i) => {
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
