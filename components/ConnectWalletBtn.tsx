import Image from "next/image"
import {Dispatch, FC, SetStateAction} from "react"
import {AiOutlinePoweroff} from "react-icons/ai"

interface ConnectWalletBtnProps {
  account: string | null | undefined
  openModel: boolean
  setOpenModel: Dispatch<SetStateAction<boolean>>
  library: any
  deactivate: () => void
  balance: any
}

const ConnectWalletBtn: FC<ConnectWalletBtnProps> = ({
  account,
  openModel,
  setOpenModel,
  library,
  deactivate,
  balance,
}) => {
  return (
    <>
      {!account && (
        <button
          className="bg-amber-600 p-2 rounded shadow-lg capitalize"
          onClick={() => {
            setOpenModel(!openModel)
          }}>
          conect your wallet
        </button>
      )}
      {account && (
        <div className="flex flex-row items-center nm-flat-slate-700 p-2 rounded-full font-mono text-lg gap-2 tracking-wider">
          <span className="">{balance}-USDT</span>
          <div className="flex flex-row items-center nm-inset-slate-700 px-2 py-1 rounded-full gap-2">
            <span>
              {account &&
                `${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )}`}
            </span>
            <Image
              src={
                library?.provider.isMetaMask
                  ? "/images/walletsIcons/meta_mask.svg"
                  : "/images/walletsIcons/wallet_connect.svg"
              }
              width={30}
              height={30}
              alt="wallet Icon"
            />
            <button
              onClick={() => {
                deactivate()
              }}
              className=" nm-flat-slate-700-sm rounded-full p-1">
              <AiOutlinePoweroff className="text-yellow-600 " />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ConnectWalletBtn
