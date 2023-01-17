import Footer from "@/components/Footer"
import HomeLinks from "@/components/navbar/HomeLinks"
import NavbarMain from "@/components/navbar/NavbarMain"
import NavbarSocialMedia from "@/components/navbar/NavbarSocialMedia"
import React from "react"
import {ChildrenTypeProp} from "types"
import LayoutsContainers from "./LayoutsContainers"

function HomeLayout(children: ChildrenTypeProp) {
  return (
    <React.Fragment></React.Fragment>
    // <LayoutsContainers>
    //   <NavbarSocialMedia />
    //   <NavbarMain links={<HomeLinks />} />
    //   {children}
    //   <Footer />
    // </LayoutsContainers>
  )
}

export default HomeLayout
