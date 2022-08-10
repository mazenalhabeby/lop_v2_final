import {AbstractConnector} from '@web3-react/abstract-connector'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {Dispatch, FC, SetStateAction, useEffect, useRef} from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {CgSpinnerTwo} from 'react-icons/cg'
import {FaCheckCircle} from 'react-icons/fa'
import toast from 'react-hot-toast'

interface ConnectWalletsModelProps {
  openModel: boolean
  setOpenModel: Dispatch<SetStateAction<boolean>>
  connectorsByName: any
  connector: AbstractConnector | undefined
  activatingConnector: any
  setActivatingConnector: any
  activate: (
    connector: AbstractConnector,
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => Promise<void>
  active: boolean
  account: string | null | undefined
  error: Error | undefined
  getErrorMessage: any
}
const ConnectWalletsModel: FC<ConnectWalletsModelProps> = ({
  openModel,
  setOpenModel,
  connectorsByName,
  connector,
  activatingConnector,
  setActivatingConnector,
  activate,
  active,
  account,
  error,
  getErrorMessage,
}) => {
  const model = useRef<any>(null)
  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!openModel) return
    function handleClick(event: {target: any}) {
      if (model.current && !model.current.contains(event.target)) {
        setOpenModel(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    // clean up
    return () => document.removeEventListener('mousedown', handleClick)
  }, [openModel, setOpenModel])

  useEffect(() => {
    if (!!error) {
      toast.error(getErrorMessage(error))
    }
  }, [error, getErrorMessage])

  return (
    <motion.div
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3, ease: 'easeInOut'}}
      ref={model}
      className={`bg-slate-700 rounded-lg w-full max-w-sm text-slate-100`}>
      <div className="bg-slate-800 w-full p-4 flex flex-row justify-between items-center rounded-t-lg">
        <span className="text-lg uppercase tracking-wider font-aclonica">
          Connect Wallets
        </span>
        <button
          className="text-xl nm-flat-slate-800 rounded-full p-1"
          onClick={() => {
            setOpenModel(false)
          }}>
          <MdOutlineClose className=" text-yellow-500" />
        </button>
      </div>
      <div className="flex flex-col gap-6 my-2">
        {Object.keys(connectorsByName).map((item, i) => {
          const currentConnector = connectorsByName[item]
          const activating = currentConnector === activatingConnector
          const connected = currentConnector === connector
          return (
            <button
              key={i}
              disabled={active}
              onClick={() => {
                setActivatingConnector(currentConnector)
                activate(connectorsByName[item])
              }}
              className="group place-self-start tracking-widest font-aclonica text-sm p-2 nm-inset-slate-700 w-[90%] mx-auto relative rounded">
              <div>
                {activating && (
                  <CgSpinnerTwo className="text-slate-800 h-1/2 absolute left-0 top-0 animate-spin" />
                )}
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    src={`/images/walletsIcons/${item}.svg`}
                    width={40}
                    height={40}
                    className={`group-disabled:grayscale group-disabled:opacity-50`}
                    alt="wallet icons"
                  />
                  <span className={`group-disabled:text-slate-600 capitalize`}>
                    Connect with {item.replace('_', ' ')}
                  </span>
                </div>
                {connected && account && (
                  <FaCheckCircle className="text-lg text-green-600 dark:text-green-400" />
                )}
              </div>
            </button>
          )
        })}
      </div>
      <div className="p-2 text-sm flex gap-1">
        <span>Don't have a Wallet?</span>
        <Link href="https://metamask.io/">
          <a target="_blank" className="text-yellow-600 dark:text-yellow-500">
            Download Here
          </a>
        </Link>
      </div>
    </motion.div>
  )
}

export default ConnectWalletsModel
