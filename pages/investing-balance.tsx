import {motion} from "framer-motion"
import DefaultLayout from "@/layouts/DefaultLayout"
import {getSession} from "next-auth/react"
import Link from "next/link"
import {client} from "@/libs/sanity"
import TitleunderLine from "@/components/TitleunderLine"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

interface BalanceProps {
  userAmount: {
    amount: string
    plan: string
    planType: string
    user: {_ref: string; _type: string}
    seedRound: string
    walletAddress: string
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
  }[]
  session: any
}

export default function InvestingBalnace({userAmount, session}: BalanceProps) {
  const {t} = useTranslation("balance")

  const tableHeader = [
    {title: "Date"},
    {title: "Investing Amount"},
    {title: "Plan"},
    {title: "period"},
    {title: "PY"},
    {title: "Withdrawl Type"},
    {title: "expird Date"},
    {title: t("WalletAddress")},
  ]

  function addMonths(numOfMonths: number, date: any) {
    const newDate = new Date(date).setMonth(
      new Date(date).getMonth() + numOfMonths
    )

    return new Date(newDate).toDateString()
  }

  function addYear(numOfYear: number, date: any) {
    const newDate = new Date(date).setFullYear(
      new Date(date).getFullYear() + numOfYear
    )

    return new Date(newDate).toDateString()
  }

  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={`pt-32 pb-12 flex flex-col gap-4`}
      style={{minHeight: "calc(100vh - 210px)"}}>
      {userAmount.length > 0 && (
        <div className="mx-8 py-2 px-4 place-self-end flex flex-row gap-4 nm-inset-slate-700 rounded justify-center items-center">
          <h2 className=" font-papyrus text-amber-400">Avalible Amount</h2>
          <div className="">There is no Avalible Amout yet</div>
          <button
            className="bg-gray-300 px-2 py-1 rounded text-gray-400"
            disabled>
            Withdrawl
          </button>
        </div>
      )}
      <div className="flex flex-col gap-2 items-center justify-center w-max mx-auto font-papyrus capitalize tracking-wider font-semibold text-2xl">
        <span>Investing History</span>
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
                userAmount.map((item, i: number) => {
                  return (
                    <tr key={i} className="text-center">
                      <td className="border border-slate-600 p-2">
                        {new Date(item._createdAt).toDateString()}
                      </td>

                      <td className="border border-slate-600 p-2 uppercase">{`${item.amount} USDT`}</td>
                      <td className="border border-slate-600 p-2">
                        {item.plan.replace("-", " ")}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.plan == "prince-plan"
                          ? "3 Month"
                          : item.plan == "king-plan"
                          ? "6 Month"
                          : item.plan == "royal-plan" && "1 Year"}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.plan == "prince-plan"
                          ? "10 %"
                          : item.plan == "king-plan" &&
                            item.planType == "monthly"
                          ? "30 %"
                          : item.plan == "king-plan" &&
                            item.planType == "oneTime"
                          ? "40 %"
                          : item.plan == "royal-plan" &&
                            item.planType == "weekly"
                          ? "60 %"
                          : item.plan == "royal-plan" &&
                            item.planType == "monthly"
                          ? "75 %"
                          : item.plan == "royal-plan" &&
                            item.planType == "oneTime" &&
                            "100 %"}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.planType}
                      </td>
                      <td>
                        {item.plan == "prince-plan"
                          ? addMonths(3, item._createdAt)
                          : item.plan == "king-plan"
                          ? addMonths(6, item._createdAt)
                          : item.plan == "royal-plan" &&
                            addYear(1, item._createdAt)}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.walletAddress.substring(0, 6)}...
                        {item.walletAddress.substring(
                          item.walletAddress.length - 4
                        )}
                      </td>
                    </tr>
                  )
                })}
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
            <Link href={"/investing"}>
              <a className=" bg-cyan-300 text-slate-700 font-papyrus py-2 px-4 rounded-lg text-xl uppercase tracking-wider shadow-lg">
                Invest Now
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

  const userAmount = await client.fetch(query, {
    userId: session.id,
  })

  return {
    props: {session, userAmount},
  }
}
