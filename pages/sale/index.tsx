import {motion} from "framer-motion"
import InfoSide from "@/components/pages/sell-round/InfoSide"
import SaleSide from "@/components/pages/sell-round/SaleSide"
import DefaultLayout from "@/layouts/DefaultLayout"
import {getSession} from "next-auth/react"
import {useEffect, useState} from "react"
import ConnectWalletsModel from "@/components/ConnectWalletsModel"
import {injected, networks, walletconnect} from "@/libs/connector"
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector"
import {UserRejectedRequestError as UserRejectedRequestErrorWalletConnect} from "@web3-react/walletconnect-connector"
import {UnsupportedChainIdError, useWeb3React} from "@web3-react/core"
import {useEagerConnect, useInactiveListener} from "@/hooks/ConnectWalletHook"
import ConnectWalletBtn from "@/components/ConnectWalletBtn"
import {formatEther} from "@ethersproject/units"
import useTranslation from "next-translate/useTranslation"
import {fetchingUser} from "@/utils/fetching"
import {apiEditpoint} from "@/utils/endpoint"
import Link from "next/link"

declare var window: any

type currentUserByDataType = {
  email: string
  name: string
  refBy: string | null
  _id: string
}[]

function getUserBalance(account: any, library: any, cb: any) {
  if (account && library) {
    library.getBalance(account).then((balance: any) => {
      cb(balance)
    })
  }
}
export default function SaleRound({session}: any) {
  const {t} = useTranslation("sale")
  const [openModel, setOpenModel] = useState(false)
  const [activatingConnector, setActivatingConnector] = useState()
  const [balance, setBalance] = useState(0)

  const addRefId = async (refId: any) => {
    const mutations = {
      mutations: [
        {
          patch: {
            query: `*[_type == 'user' && _id == "${session.id}"]`,
            set: {
              refBy: refId,
            },
          },
        },
      ],
    }

    await fetch(apiEditpoint, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
      body: JSON.stringify(mutations),
      method: "POST",
    })
  }

  useEffect(() => {
    const redIdfromStorge = window.localStorage.getItem("refId")

    fetchingUser(session.id).then((data) => {
      if (data[0].refBy == null) {
        if (redIdfromStorge) {
          addRefId(redIdfromStorge)
          window.localStorage.removeItem("refId")
        }
      } else {
        window.localStorage.removeItem("refId")
      }
    })
  }, [session])

  const context = useWeb3React()
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context

  useEffect(() => {
    if (openModel) {
      document.body.classList.add("active__model")
    } else {
      document.body.classList.remove("active__model")
    }
  }, [openModel])

  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  useEffect(() => {
    getUserBalance(account, library, setBalance)
  }, [account, library])

  enum ConnectorNames {
    Injected = "meta_mask",
    WalletConnect = "wallet_connect",
  }

  const connectorsByName: {[connectorName in ConnectorNames]: any} = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
  }

  function getErrorMessage(error: Error) {
    if (error instanceof NoEthereumProviderError) {
      return t("errorNoWallet")
    } else if (error instanceof UnsupportedChainIdError) {
      return (
        <div className="flex flex-row text-center gap-x-3">
          <span>{t("errorWrongNetwork")}</span>
          <button
            className="bg-yellow-500 px-2 py-1 rounded-lg"
            onClick={() => {
              handleNetworkSwitch("bsc")
            }}>
            Binance Network
          </button>
        </div>
      )
    } else if (
      error instanceof UserRejectedRequestErrorInjected ||
      error instanceof UserRejectedRequestErrorWalletConnect
    ) {
      return t("errorAuthorize")
    } else {
      return t("globalError")
    }
  }

  const changeNetwork = async ({networkName}: {networkName: any}) => {
    if (!window.ethereum) throw new Error("No crypto wallet found")
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          //@ts-ignore
          ...networks[networkName],
        },
      ],
    })
  }

  const handleNetworkSwitch = async (networkName: any) => {
    await changeNetwork({networkName})
  }

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector)
  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="flex flex-col gap-10 xl:gap-4 pt-36 pb-20 relative"
      //@ts-ignore
    >
      {openModel && (
        <div className="absolute w-full h-screen top-0 left-0 bg-slate-900/80 backdrop-blur-lg z-[99] flex justify-center items-center">
          <ConnectWalletsModel
            openModel={openModel}
            setOpenModel={setOpenModel}
            connectorsByName={connectorsByName}
            connector={connector}
            activatingConnector={activatingConnector}
            setActivatingConnector={setActivatingConnector}
            activate={activate}
            active={active}
            account={account}
            error={error}
            getErrorMessage={getErrorMessage}
          />
        </div>
      )}
      {/* <div className="w-full container flex justify-end px-4">
        <ConnectWalletBtn
          account={account}
          openModel={openModel}
          setOpenModel={setOpenModel}
          library={library}
          deactivate={deactivate}
          balance={Number(formatEther(balance)).toFixed(4)}
        />
      </div> */}
      <div className="flex flex-col-reverse  gap-10 xl:gap-0 px-8 xl:px-0 xl:flex-row  items-center justify-around">
        <InfoSide />
        {/* <SaleSide getUserBalance={getUserBalance} /> */}
        <div className=" text-center nm-flat-slate-700 p-4 rounded-lg text-xl font-aclonica uppercase tracking-wider leading-relaxed">
          Presale Time Finished,
          <br /> buy Lop now from the market on <br />
          <Link href={"https://difx.com/login"}>
            <a>
              <span className="text-blue-500">DIFX</span> PLATFORM
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  }
  return {
    props: {session},
  }
}

SaleRound.getLayout = DefaultLayout
