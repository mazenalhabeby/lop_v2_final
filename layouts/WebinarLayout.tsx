import Footer from "@/components/Footer"
import {ChildrenTypeProp} from "@/types"
import LayoutsContainers from "./LayoutsContainers"

const WebinarLayout = (children: ChildrenTypeProp) => {
  return (
    <LayoutsContainers>
      {children}
      <Footer />
    </LayoutsContainers>
  )
}

export default WebinarLayout
