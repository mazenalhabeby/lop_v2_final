import Footer from '@/components/Footer'
import DefaultLinks from '@/components/navbar/DefaultLinks'
import NavbarMain from '@/components/navbar/NavbarMain'
import NavbarSocialMedia from '@/components/navbar/NavbarSocialMedia'
import {ChildrenTypeProp} from '@/types'
import {calcLength} from 'framer-motion'
import {useEffect, useState} from 'react'
import LayoutsContainers from './LayoutsContainers'

const DefaultLayout = (children: ChildrenTypeProp) => {
  return (
    <LayoutsContainers>
      <NavbarSocialMedia />
      <NavbarMain links={<DefaultLinks />} />
      {children}
      <Footer />
    </LayoutsContainers>
  )
}

export default DefaultLayout
