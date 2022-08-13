import {FC} from 'react'
import TitleunderLine from '../TitleunderLine'

interface ContentContainerProps {
  children: any
  title: string
}

const ContentContainer: FC<ContentContainerProps> = ({children, title}) => {
  return (
    <>
      <div className="w-full nm-flat-slate-700 my-4 p-4 rounded-lg">
        <div className="flex flex-col gap-6 justify-center items-center nm-inset-slate-700 p-4 rounded-lg">
          <div className="flex flex-col gap-2">
            <h2 className=" font-aclonica uppercase tracking-widest text-lg">
              {title}
            </h2>
            <TitleunderLine />
          </div>
          {children}
        </div>
      </div>
    </>
  )
}

export default ContentContainer
