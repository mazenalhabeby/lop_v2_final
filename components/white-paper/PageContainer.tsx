import SidebarContext from '@/context/SidebarContext'
import {FC, useContext} from 'react'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'

interface PageContainerProps {
  children: any
  pageTitle: string
}

const PageContainer: FC<PageContainerProps> = ({children, pageTitle}) => {
  const {isOpen, setIsOpen, handleModal} = useContext(SidebarContext)

  return (
    <div className="flex flex-col w-full p-8">
      <div className="flex flex-row justify-between items-center gap-4">
        <h1 className=" font-papyrus text-lg uppercase text-amber-500">
          {pageTitle}
        </h1>
        <button
          onClick={() => {
            handleModal()
          }}
          className=" block lg:hidden text-lg nm-flat-slate-700-lg text-slate-300 rounded-full p-2">
          {isOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </button>
      </div>
      {children}
    </div>
  )
}

export default PageContainer
