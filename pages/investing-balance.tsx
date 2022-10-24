import {useEffect, useState} from "react"
import {motion} from "framer-motion"
import DefaultLayout from "@/layouts/DefaultLayout"
import {getSession} from "next-auth/react"
import {client} from "@/libs/sanity"
import TitleunderLine from "@/components/TitleunderLine"
import {fetchinginvestingPlan} from "@/utils/fetching"
import {IoIosArrowDown} from "react-icons/io"
import {GiTakeMyMoney} from "react-icons/gi"
import ProfitAmount from "@/components/pages/investing-balance/ProfitAmount"
import {nanoid} from "nanoid"
import {CgSpinnerTwoAlt} from "react-icons/cg"
import WithdrawalAmount from "@/components/pages/investing-balance/WithdrawalAmount"
import Image from "next/image"
import Link from "next/link"
import InvestingBalanceSelleton from "@/components/skelletonComponents/investingBalanceSelleton"

export type investDetailsType = {
  amount: string
  avalibleAmount: number
  withdrawalAmount: number
  plan: string
  planPeriod: number
  planType: string
  py: string
  user: {_ref: string; _type: string}
  walletAddress: string
  withdrawal: {
    itemCount: number
    amount: string
    py: string
    pyProfit: number
    pyProfitByPeriod: number
    withdrawalAppear: boolean
    withdrawalTime: number
    _key: string
    _type: string
  }[]
  withdrawalsAmountDetails: {
    itemCount: number
    amount: string
    status: number
    transactionLink: string
    withdrawalTime: number
    _key: string
    _type: string
  }[]
  withdrawalPeriod: string
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

export default function InvestingBalnace({session, currentUtcTimeStamp}: any) {
  const [investDetails, setInvestDetails] = useState<investDetailsType[]>([])
  const [loading, setLoading] = useState(true)
  const [prePage, setPrePage] = useState(false)
  const [open, setOpen] = useState(false)
  const [planOpen, setPlanOpen] = useState("")
  const [switchBtn, setSwitchBtn] = useState(1)
  const [withdrawalLoading, setWithdrawalLoading] = useState(false)
  const [withdrawalLoadingPlan, setWithdrawalLoadingPlan] = useState("")

  const collapse = (id: string) => {
    setPlanOpen(id)
    if (planOpen === id) {
      setOpen(false)
      setPlanOpen("")
    } else {
      setOpen(true)
    }
  }

  const tableHeader = [
    {title: "Date", cols: "col-span-2"},
    {title: "Investing", cols: "col-span-1"},
    {title: "Plan", cols: "col-span-1"},
    {title: "Period", cols: "col-span-1"},
    {title: "PY", cols: "col-span-1"},
    {title: "Contract Type", cols: "col-span-1"},
    {title: "Balance", cols: "col-span-1"},
    {title: "Expiry date", cols: "col-span-2"},
    {title: "Wallet Address", cols: "col-span-1"},
  ]

  const toggleBtn = [
    {
      id: 1,
      title: "Profit Amount",
    },
    {id: 2, title: "Withdrawal Amount"},
  ]

  useEffect(() => {
    setPrePage(true)
    setTimeout(() => {
      setPrePage(false)
    }, 3000)
  }, [])

  useEffect(() => {
    fetchinginvestingPlan(session.id).then((data) => {
      setInvestDetails(data)
    })
    if (loading) {
      setTimeout(() => {
        fetchinginvestingPlan(session.id).then((data) => {
          setInvestDetails(data)
        })
      }, 3000)
      setLoading(false)
    } else {
      setLoading(false)
    }
  }, [loading, withdrawalLoading])

  const callAPI = async (msg: any) => {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${msg}`
      )
      const data = await res.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }

  const WithdrawalFunc = (plan: investDetailsType) => {
    setWithdrawalLoading(true)
    setWithdrawalLoadingPlan(plan._id)
    const totalWithdrawalAmount =
      plan.withdrawalsAmountDetails == undefined
        ? plan.avalibleAmount
        : plan.withdrawalsAmountDetails.reduce(
            (perVal: any, curVal: any) =>
              Number(perVal) + Number(curVal.amount),
            0
          )
    const withdrawalField =
      plan.withdrawalsAmountDetails == undefined ? 0 : plan.withdrawalAmount
    const setwithdrawalAmount = plan.avalibleAmount - withdrawalField
    if (plan.withdrawalsAmountDetails == undefined) {
      client
        .patch(plan._id)
        .set({
          withdrawalAmount: plan.avalibleAmount,
          withdrawalsAmountDetails: [
            {
              amount: setwithdrawalAmount.toString(),
              itemCount: 1,
              status: 1,
              transactionLink: "",
              withdrawalTime: currentUtcTimeStamp,
              _key: nanoid(),
              _type: "WithdrawalAmount",
            },
          ],
        })
        .commit()
    } else {
      client
        .patch(plan._id)
        .set({
          withdrawalAmount:
            totalWithdrawalAmount + plan.avalibleAmount - plan.withdrawalAmount,
          withdrawalsAmountDetails: [
            ...plan.withdrawalsAmountDetails,
            {
              amount: setwithdrawalAmount.toString(),
              itemCount: plan.withdrawalsAmountDetails.length + 1,
              status: 1,
              transactionLink: "",
              withdrawalTime: currentUtcTimeStamp,
              _key: nanoid(),
              _type: "WithdrawalAmount",
            },
          ],
        })
        .commit()
    }

    setTimeout(() => {
      fetchinginvestingPlan(session.id)
      setWithdrawalLoading(false)
      const msg = `New Withdrawal Req %0A - name: ${
        session.user.name
      } %0A - walletAddress: ${plan.walletAddress} %0A - amount ${
        plan.withdrawalsAmountDetails == undefined
          ? plan.avalibleAmount
          : plan.avalibleAmount - plan.withdrawalAmount
      }`
      callAPI(msg)
      setOpen(true)
      setPlanOpen(plan._id)
      setSwitchBtn(2)
    }, 3000)
  }

  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={`pt-32 pb-12 flex flex-col gap-4`}
      style={{minHeight: "calc(100vh - 210px)"}}>
      <div className="flex flex-col gap-2 items-center justify-center w-max mx-auto font-papyrus capitalize tracking-wider font-semibold text-2xl">
        <span>Investing History</span>
        <TitleunderLine />
      </div>
      <div className=" mx-auto">
        <div className=" hidden lg:grid grid-cols-12 items-center justify-items-center mb-6">
          {tableHeader.map((item, i) => {
            return (
              <span key={i} className={item.cols}>
                {item.title}
              </span>
            )
          })}
        </div>
        {investDetails.length > 0 && (
          <div>
            {!prePage ? (
              <div className="flex flex-col gap-8">
                {investDetails.map((item, i) => {
                  const WithdrawalNumber =
                    item.withdrawalAmount == undefined
                      ? 0
                      : item.withdrawalAmount
                  return (
                    <div key={i} className="nm-flat-slate-700 py-4 rounded">
                      <div
                        className={`${
                          open &&
                          planOpen == item._id &&
                          "border-b-2 border-slate-600 pb-4"
                        } hidden lg:grid grid-cols-12 items-center justify-items-center `}>
                        <span className=" col-span-2">
                          {new Date(item._createdAt).toDateString()}
                        </span>
                        <span className=" col-span-1">
                          {Number(item.amount).toLocaleString()} USDT
                        </span>
                        <span className=" col-span-1 capitalize">
                          {item.plan.replace("-plan", " contract")}
                        </span>
                        <span className=" col-span-1">
                          {item.planPeriod} Months
                        </span>
                        <span className=" col-span-1">{item.py} %</span>
                        <span className=" col-span-1 capitalize">
                          {item.planType}
                        </span>
                        <span className=" col-span-1 flex flex-row items-center gap-1">
                          {item.avalibleAmount - WithdrawalNumber}
                          <span>USDT</span>
                          {item.avalibleAmount - WithdrawalNumber > 0 && (
                            <button
                              onClick={() => {
                                WithdrawalFunc(item)
                              }}
                              className={` nm-flat-slate-700 p-1 rounded-full disabled:text-slate-600`}
                              disabled={withdrawalLoading}>
                              {withdrawalLoading &&
                                withdrawalLoadingPlan == item._id && (
                                  <CgSpinnerTwoAlt className=" animate-spin" />
                                )}
                              {!withdrawalLoading && (
                                <GiTakeMyMoney className="text-xl text-amber-400 " />
                              )}
                              {withdrawalLoading &&
                                withdrawalLoadingPlan != item._id && (
                                  <GiTakeMyMoney className="text-xl text-amber-400 " />
                                )}
                            </button>
                          )}
                        </span>
                        <span className=" col-span-2">
                          {item.plan == "royal-plan"
                            ? new Date(
                                new Date(item._createdAt).setFullYear(
                                  new Date(item._createdAt).getFullYear() + 1
                                )
                              ).toDateString()
                            : item.plan == "king-plan"
                            ? new Date(
                                new Date(item._createdAt).setMonth(
                                  new Date(item._createdAt).getMonth() + 6
                                )
                              ).toDateString()
                            : item.plan == "prince-plan" &&
                              new Date(
                                new Date(item._createdAt).setMonth(
                                  new Date(item._createdAt).getMonth() + 3
                                )
                              ).toDateString()}
                        </span>
                        <span className=" col-span-1">
                          {item.walletAddress.substring(0, 6)}...
                          {item.walletAddress.substring(
                            item.walletAddress.length - 4
                          )}
                        </span>
                        {item.avalibleAmount > 0 && (
                          <button
                            onClick={() => {
                              collapse(item._id)
                            }}
                            className=" col-span-1 p-1 nm-flat-slate-700 rounded-full">
                            <IoIosArrowDown
                              className={`
                        ${
                          open && planOpen == item._id
                            ? "rotate-180"
                            : " rotate-0"
                        } transition-all duration-150 text-xl 
                      `}
                            />
                          </button>
                        )}
                      </div>
                      <div
                        className={`${
                          open &&
                          planOpen == item._id &&
                          "border-b-2 border-slate-600 pb-4"
                        } grid lg:hidden grid-cols-12 items-center justify-items-center gap-4 text-sm`}>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Date</span>
                          <span>
                            {new Date(item._createdAt).toDateString()}
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Investing</span>
                          <span>
                            {Number(item.amount).toLocaleString()} USDT
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Plan</span>
                          <span className=" col-span-1 capitalize">
                            {item.plan.replace("-plan", " contract")}
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>period</span>
                          <span>{item.planPeriod} Months</span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>PY</span>
                          <span>{item.py} %</span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Contract Type</span>
                          <span className=" col-span-1 capitalize">
                            {item.planType}
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Balance</span>
                          <span className="flex flex-row items-center gap-1">
                            {item.avalibleAmount - WithdrawalNumber}
                            <span>USDT</span>
                            {item.avalibleAmount - WithdrawalNumber > 0 && (
                              <button
                                onClick={() => {
                                  WithdrawalFunc(item)
                                }}
                                className={` nm-flat-slate-700 p-1 rounded-full disabled:text-slate-600`}
                                disabled={withdrawalLoading}>
                                {withdrawalLoading &&
                                  withdrawalLoadingPlan == item._id && (
                                    <CgSpinnerTwoAlt className=" animate-spin" />
                                  )}
                                {!withdrawalLoading && (
                                  <GiTakeMyMoney className="text-xl text-amber-400 " />
                                )}
                                {withdrawalLoading &&
                                  withdrawalLoadingPlan != item._id && (
                                    <GiTakeMyMoney className="text-xl text-amber-400 " />
                                  )}
                              </button>
                            )}
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Expiry date</span>
                          <span>
                            {item.plan == "royal-plan"
                              ? new Date(
                                  new Date(item._createdAt).setFullYear(
                                    new Date(item._createdAt).getFullYear() + 1
                                  )
                                ).toDateString()
                              : item.plan == "king-plan"
                              ? new Date(
                                  new Date(item._createdAt).setMonth(
                                    new Date(item._createdAt).getMonth() + 6
                                  )
                                ).toDateString()
                              : item.plan == "prince-plan" &&
                                new Date(
                                  new Date(item._createdAt).setMonth(
                                    new Date(item._createdAt).getMonth() + 3
                                  )
                                ).toDateString()}
                          </span>
                        </div>
                        <div className=" col-span-4 flex flex-col items-center justify-center gap-2">
                          <span>Wallet Address</span>
                          <span>
                            {item.walletAddress.substring(0, 6)}...
                            {item.walletAddress.substring(
                              item.walletAddress.length - 4
                            )}
                          </span>
                        </div>
                        {item.avalibleAmount > 0 && (
                          <button
                            onClick={() => {
                              collapse(item._id)
                            }}
                            className=" col-span-12 p-1 nm-flat-slate-700 rounded-full">
                            <IoIosArrowDown
                              className={`
                        ${
                          open && planOpen == item._id
                            ? "rotate-180"
                            : " rotate-0"
                        } transition-all duration-150 text-xl 
                      `}
                            />
                          </button>
                        )}
                      </div>
                      {open && planOpen == item._id && (
                        <div>
                          <div className="flex flex-row gap-6 m-2">
                            {toggleBtn.map((item, i) => {
                              return (
                                <button
                                  onClick={() => {
                                    setSwitchBtn(item.id)
                                  }}
                                  key={i}
                                  className={`${
                                    item.id == switchBtn &&
                                    "text-amber-400 underline-offset-8 underline"
                                  } uppercase`}>
                                  {item.title}
                                </button>
                              )
                            })}
                          </div>
                          {switchBtn == 1 && <ProfitAmount item={item} />}
                          {switchBtn == 2 && <WithdrawalAmount item={item} />}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <InvestingBalanceSelleton item={investDetails.length} />
              </div>
            )}
          </div>
        )}
        {investDetails.length == 0 && !prePage && (
          <div className="border border-slate-600 w-full flex flex-col gap-4 justify-center items-center py-14">
            <Image
              src="/images/burialOpen.png"
              alt="empty balance"
              width={150}
              height={75}
              className={"opacity-50"}
            />
            <span className="text-xl capitalize font-papyrus font-semibold tracking-widest text-slate-400">
              you do not have any Investment yet!
            </span>
            <Link href={"/investing"}>
              <a className=" bg-cyan-300 text-slate-700 font-papyrus py-2 px-4 rounded-lg text-xl uppercase tracking-wider shadow-lg">
                Invest With LOP NOW
              </a>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

InvestingBalnace.getLayout = DefaultLayout

export async function getServerSideProps(context: any) {
  const currentUtcTimeStamp = new Date().getTime()
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  }

  const query = `*[_type=="investing"&& user._ref == $userId] | order(_createdAt) {
    _id,
    ...
  }`

  let userAmount = await client.fetch(query, {
    userId: session.id,
  })

  userAmount.map((item: any) => {
    item.withdrawal.map((itm: any) => {
      if (currentUtcTimeStamp >= itm.withdrawalTime) {
        itm.withdrawalAppear = true
      } else {
        0
      }
    })
  })

  userAmount.map((item: any) => {
    client
      .patch(item._id)
      .set({
        withdrawal: item.withdrawal,
      })
      .commit()
  })

  userAmount.map((item: any) => {
    let TotalAvailable = 0
    const parentId = item._id
    item.withdrawal.reduce((acc: any, obj: any) => {
      if (obj.withdrawalAppear) {
        TotalAvailable = acc += obj.pyProfitByPeriod
      }
      return TotalAvailable
    }, 0)
    client
      .patch(parentId)
      .set({
        avalibleAmount: TotalAvailable,
      })
      .commit()
  })

  return {
    props: {session, userAmount, currentUtcTimeStamp},
  }
}
