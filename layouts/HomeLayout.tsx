import Footer from '@/components/Footer'
import HomeLinks from '@/components/navbar/HomeLinks'
import NavbarMain from '@/components/navbar/NavbarMain'
import {ChildrenTypeProp} from 'types'
import LayoutsContainers from './LayoutsContainers'

function HomeLayout(children: ChildrenTypeProp) {
  return (
    <LayoutsContainers>
      <NavbarMain links={<HomeLinks />} />
      {children}
      <Footer />
    </LayoutsContainers>
  )
}

export default HomeLayout
