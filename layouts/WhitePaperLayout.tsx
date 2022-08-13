import DefaultLinks from '@/components/navbar/DefaultLinks'
import NavbarMain from '@/components/navbar/NavbarMain'
import Sidebar from '@/components/white-paper/Sidebar'
import {SidebarContextProvider} from '@/context/SidebarContext'
import LayoutsContainers from './LayoutsContainers'

const WhitePaperLayout = (children: any) => {
  return (
    <SidebarContextProvider>
      <LayoutsContainers>
        <NavbarMain links={<DefaultLinks />} />
        <div className="flex flex-row min-h-screen">
          <Sidebar />
          <div className=" flex flex-1 pt-14">{children}</div>
        </div>
      </LayoutsContainers>
    </SidebarContextProvider>
  )
}

export default WhitePaperLayout
