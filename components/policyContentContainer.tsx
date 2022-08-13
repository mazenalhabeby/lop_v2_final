import {ChildrenTypeProp} from '@/types'
import {FC} from 'react'
import TitleunderLine from './TitleunderLine'

interface policyContentContainerProps {
  children: any
  title: string
}

const PolicyContentContainer: FC<policyContentContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-max flex flex-col gap-2 mx-auto">
        <h3 className="text-lg font-aclonica uppercase tracking-widest">
          {title}
        </h3>
        <TitleunderLine />
      </div>
      <>{children}</>
    </div>
  )
}

export default PolicyContentContainer
