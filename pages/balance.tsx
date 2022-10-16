import {motion} from "framer-motion"
import DefaultLayout from "@/layouts/DefaultLayout"
import {getSession} from "next-auth/react"
import Link from "next/link"
import {client} from "@/libs/sanity"
import {useEffect, useMemo, useState} from "react"
import TitleunderLine from "@/components/TitleunderLine"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import {fetchingRefferalUser, fetchingRefferalUsers} from "@/utils/fetching"
import MainButton from "@/components/MainButton"
import {apiEditpoint} from "@/utils/endpoint"
import toast from "react-hot-toast"
import {FaSpinner} from "react-icons/fa"
import {useRouter} from "next/router"
import {copyClipBoard} from "@/utils/CopyClipboard"
import {RiFileCopyLine} from "react-icons/ri"
import {referralUsers, refferalQUERY} from "@/utils/query"

interface BalanceProps {
  userAmount: {
    amount: string
    coinPrice: number
    coinUsed: string
    seedRound: string
    user: {_ref: string; _type: string}
    walletAddress: string
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
  }[]
  session: any
  currentUser: any
}

type refferaluserType = {
  refferalId: string | null
  refferalRoul: string | null
  _id: string
  referralUsers: []
}
export default function Balance({
  userAmount,
  session,
  currentUser,
}: BalanceProps) {
  const icoRate = 0.015
  const preSale = 0.025
  const {t} = useTranslation("balance")
  const [icoTotal, setIcoTotal] = useState<any>([])
  const [refferalUser, setRefferalUser] = useState<refferaluserType>(
    currentUser[0]
  )
  const [currentRefCode, setcurrentRefCode] = useState(
    currentUser[0] ? currentUser[0].refferalId : " "
  )
  const [referralsUsers, setReferralsUsers] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const totalIco = userAmount.filter((item) => {
      item.seedRound == "ico"
    })
    setIcoTotal(totalIco)
  }, [userAmount])

  useEffect(() => {
    setcurrentRefCode(currentUser[0] ? currentUser[0].refferalId : " ")
    setRefferalUser(currentUser[0])
    fetchingRefferalUsers(currentRefCode).then((data) => {
      setReferralsUsers(data)
      console.log(data)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let generateNum = Math.floor(Math.random() * 1000 + 10)
  let generateNum2 = Math.floor(Math.random() * 10000 + 100)

  const generateReferralId = `${session.user.name.substring(
    0,
    3
  )}${generateNum}${session.user.name.substring(
    session.user.name.length - 3
  )}${generateNum2}`

  const addRefCode = async () => {
    const mutations = {
      mutations: [
        {
          create: {
            _type: "refferal",
            refferalUser: {
              _type: "reference",
              _ref: session.id,
            },
            refferalId: generateReferralId.toLowerCase(),
            refferalRoul: "referral",
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

  const addnewRefferalUser = async () => {
    setLoading(true)
    await addRefCode().then(() => {
      setTimeout(() => {
        setLoading(false)
        fetchingRefferalUser(session.id).then((data) => {
          setRefferalUser(data[0])
        })
        toast.success("Your code Activated")
      }, 1000)
    })
  }

  const tableHeader = [
    {title: t("Data")},
    {title: t("Value")},
    {title: t("SaleRound")},
    {title: t("roundPrice")},
    {title: t("Balance")},
    {title: t("WalletAddress")},
    {title: t("Distribution")},
  ]

  const comassionRate =
    refferalUser?.refferalRoul == "referral"
      ? 5
      : refferalUser?.refferalRoul == "affiliate"
      ? 10
      : undefined

  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={`pt-32 pb-12 flex flex-col gap-4 min-h-screen lg:min-h-0`}>
      {/* {refferalUser?.refferalId != null && (
        // <motion.div
        //   initial={{opacity: 0}}
        //   animate={{opacity: 1}}
        //   exit={{opacity: 0}}
        //   className="my-8 flex flex-row flex-wrap gap-8 items-center justify-center nm-inset-slate-700 py-8 px-4 w-[90%] lg:w-max mx-auto rounded-lg">
        //   <p className=" text-4xl font-bold capitalize tracking-wide leading-tight">
        //     Refer Friends. Earn <br />
        //     Crypto Together.
        //   </p>
        //   <div className="nm-flat-slate-700 p-2">
        //     <div className="flex flex-col justify-center items-center gap-2 w-full bg-slate-800">
        //       <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
        //         <span>Total Referrals</span>
        //         <span>Total Deposit</span>
        //         <span>Your balance</span>
        //       </div>
        //       <div className="grid grid-cols-3 gap-4 w-full justify-items-center text-lg font-semibold text-amber-500">
        //         <span>{referralsUsers.length}</span>
        //         <span>0</span>
        //         <span>0</span>
        //       </div>
        //     </div>
        //     <div className="flex flex-col gap-4 my-4">
        //       <div className="flex flex-row justify-between items-center">
        //         <span>Referral ID : </span>
        //         <span className="flex gap-1">
        //           {refferalUser?.refferalId}
        //           <input
        //             id="refId"
        //             type="text"
        //             defaultValue={refferalUser?.refferalId}
        //             readOnly
        //             hidden
        //           />
        //           <button
        //             onClick={() => {
        //               copyClipBoard("refId", "Your Refferal Id copied")
        //             }}>
        //             <RiFileCopyLine />
        //           </button>
        //         </span>
        //       </div>
        //       <div className="flex flex-row justify-between items-center">
        //         <span>Referral Link : </span>
        //         <span className="flex gap-1">
        //           {`https//lea...=${refferalUser?.refferalId}`}
        //           <input
        //             id="refLink"
        //             type="text"
        //             defaultValue={`https://leagueofpharaohs.com/?ref=${refferalUser?.refferalId}`}
        //             readOnly
        //             hidden
        //           />
        //           <button
        //             onClick={() => {
        //               copyClipBoard("refLink", "Your Refferal Link copied")
        //             }}>
        //             <RiFileCopyLine />
        //           </button>
        //         </span>
        //       </div>
        //     </div>
        //     <h2 className="text-xs font-semibold tracking-wider">
        //       you will receive {comassionRate}% on the first deposit your
        //       referral will make
        //     </h2>
        //   </div>
        // </motion.div>
      )} */}
      {/* {refferalUser?.refferalId == null && userAmount.length > 0 && (
        // <motion.div
        //   initial={{opacity: 0}}
        //   animate={{opacity: 1}}
        //   transition={{delay: 0.5}}
        //   exit={{opacity: 0}}
        //   className="my-8 flex flex-row flex-wrap gap-8 items-center justify-center nm-inset-slate-700 py-8 px-4 w-[90%] lg:w-max mx-auto rounded-lg">
        //   <p className=" text-4xl font-bold capitalize tracking-wide leading-tight">
        //     Refer Friends. Earn <br />
        //     Crypto Together.
        //   </p>
        //   <div>
        //     <button
        //       onClick={addnewRefferalUser}
        //       className="bg-amber-600 p-2 rounded-md font-semibold text-xl tracking-wider shadow-lg disabled:bg-slate-400 disabled:text-slate-500 flex flex-row justify-center items-center gap-2"
        //       disabled={loading}>
        //       {loading && (
        //         <FaSpinner className=" animate-spin text-slate-500" />
        //       )}
        //       Activate Code
        //     </button>
        //   </div>
        // </motion.div>
      )} */}

      <div className="flex flex-col gap-2 items-center justify-center w-max mx-auto font-papyrus capitalize tracking-wider font-semibold text-2xl">
        <span>{t("historyTitle")}</span>
        <TitleunderLine />
      </div>

      <div className="flex flex-col items-start overflow-x-auto lg:w-4/5 lg:mx-auto">
        {userAmount.length > 0 && (
          <table className="table-auto w-full border-collapse border border-slate-600 ">
            <thead>
              <tr>
                {tableHeader.map((item, i) => {
                  return (
                    <th
                      key={i}
                      className="border border-slate-600 py-2 bg-slate-800">
                      {item.title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {userAmount.length > 0 &&
                userAmount.map(
                  (
                    item: {
                      amount: string
                      coinPrice: number
                      coinUsed: string
                      seedRound: string
                      user: {
                        _ref: string
                        _type: string
                      }
                      walletAddress: string
                      _createdAt: string
                      _id: string
                      _rev: string
                      _type: string
                      _updatedAt: string
                    },
                    i: number
                  ) => {
                    return (
                      <tr key={i} className="text-center">
                        <td className="border border-slate-600 p-2">
                          {new Date(item._createdAt)
                            .toISOString()
                            .substring(0, 10)}
                        </td>
                        <td className="border border-slate-600 p-2 uppercase">{`${item.amount} ${item.coinUsed}`}</td>
                        <td className="border border-slate-600 p-2">
                          {item.seedRound}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {item.seedRound == "ico"
                            ? `${icoRate} $`
                            : item.seedRound == "preSale"
                            ? `${preSale} $`
                            : undefined}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {item.seedRound == "ico"
                            ? `${(Number(item.amount) / icoRate).toLocaleString(
                                "en-US"
                              )} LOP`
                            : item.seedRound == "preSale"
                            ? `${(
                                (Number(item.amount) * item.coinPrice) /
                                preSale
                              ).toLocaleString("en-US")} LOP`
                            : undefined}
                        </td>
                        <td className="border border-slate-600 p-2">
                          {item.walletAddress.substring(0, 6)}...
                          {item.walletAddress.substring(
                            item.walletAddress.length - 4
                          )}
                        </td>
                        <td className="border border-slate-600 p-2 text-xs max-w-[2rem] px-2">
                          {item.seedRound == "ico"
                            ? t("icosaleMsg")
                            : item.seedRound == "preSale"
                            ? t("presaleMsg")
                            : undefined}
                        </td>
                      </tr>
                    )
                  }
                )}
            </tbody>
          </table>
        )}
        {userAmount.length === 0 && (
          <div className="border border-slate-600 w-full flex flex-col gap-4 justify-center items-center py-14">
            <Image
              src="/images/burialOpen.png"
              alt="empty balance"
              width={150}
              height={75}
              className={"opacity-50"}
            />
            <span className="text-xl capitalize font-papyrus font-semibold tracking-widest text-slate-400">
              you do not have a balance yet!
            </span>
            <Link href={"/sale"}>
              <a className=" bg-cyan-300 text-slate-700 font-papyrus py-2 px-4 rounded-lg text-xl uppercase tracking-wider shadow-lg">
                Buy LOP
              </a>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

Balance.getLayout = DefaultLayout

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

  const query = `*[_type=="token-sale"&& user._ref == $userId] | order(_createdAt) {
    _id,
    ...
  }`

  const userAmount = await client.fetch(query, {
    userId: session.id,
  })

  const currentUser = await client.fetch(refferalQUERY, {
    userId: session.id,
  })

  return {
    props: {session, userAmount, currentUser},
  }
}
