import {ReactNode} from 'react'

interface ChildrenTypeProp {
  children: JSX.Element | JSX.Element[] | ReactNode | Null
}

interface SocialMediaLinkType {
  iconName: IconType
  socialLink: string
}
