import {socialMediaLinks} from '@/data/socialMediaLinks'
import Link from 'next/link'
import {SocialMediaLinkType} from 'types'
import styles from '@/styles/components/navbar/NavbarSocialMedia.module.css'

const NavbarSocialMedia = () => {
  return (
    <div className={styles.wrapper} x-component="navbar-socialMedia">
      <div className={styles.links_container}>
        <span>join the community &#8282;</span>
        <ul className={styles.links_wrapper}>
          {socialMediaLinks.map((link: SocialMediaLinkType, i: number) => {
            return (
              <li key={i}>
                <Link href={link.socialLink}>
                  <a>
                    <link.iconName />
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

export default NavbarSocialMedia
