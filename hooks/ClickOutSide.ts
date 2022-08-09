import {useEffect, useRef} from 'react'

export const useClickOutside = (handler: () => void) => {
  let domNode = useRef()

  useEffect(() => {
    let maybeHandler = (event: {target: any}) => {
      //@ts-ignore
      if (!domNode.current.contains(event.target)) {
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return () => {
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}
