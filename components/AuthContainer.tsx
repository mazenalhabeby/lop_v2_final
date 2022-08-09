import {ChildrenTypeProp} from '@/types'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {FC} from 'react'
import TitleunderLine from './TitleunderLine'

interface AuthContainerProps extends ChildrenTypeProp {
  title: string
}
const AuthContainer: FC<AuthContainerProps> = ({children, title}) => {
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="w-full h-screen flex justify-center items-center ">
      <div className="flex flex-col gap-4 rounded-xl nm-flat-slate-700 px-4">
        <div className="bg-slate-800 rounded-b-3xl w-max mx-auto px-3 py-2 ">
          <img src="/images/logo.png" alt="logo" className=" w-24" />
        </div>
        <h1 className="text-center font-aclonica uppercase text-xl ">
          League of pharaohs
        </h1>
        <span className="text-center font-papyrus text-xl capitalize tracking-wider text-amber-400">
          {title}
        </span>
        <TitleunderLine />
        <>{children}</>
        <TitleunderLine />
        <div className="text-center py-2 text-sm font-papyrus capitalize hover:text-amber-500">
          <Link href={'/'}>
            <a>back to home</a>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default AuthContainer
