import {createContext, Dispatch, SetStateAction, useState} from 'react'

interface SidebarContext {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  handleModal: Function
}

const SidebarContext = createContext({} as SidebarContext)

export function SidebarContextProvider({children}: any) {
  const [isOpen, setIsOpen] = useState(false)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handleModal}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContext
