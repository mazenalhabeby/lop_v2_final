import PlanCard from "@/components/PlanCard"
import TitleunderLine from "@/components/TitleunderLine"
import DefaultLayout from "@/layouts/DefaultLayout"
import {motion} from "framer-motion"
import {getSession} from "next-auth/react"
import React from "react"

export default function Investing() {
  const investingPlan = [
    {
      name: "Prince PLan",
      apy: "10%",
      minInvest: 50,
      label: false,
    },
    {
      name: "King PLan",
      apy: "40%",
      minInvest: 50,
      label: false,
    },
    {
      name: "Royal PLan",
      apy: "100%",
      minInvest: 200,
      label: true,
    },
  ]

  const tableData = [
    {
      plan: "weekly Withdrawl APY",
      plan01Val: "-",
      plan02Val: "-",
      plan03Val: "60 %",
    },
    {
      plan: "monthly Withdrawl APY",
      plan01Val: "-",
      plan02Val: "30 %",
      plan03Val: "75 %",
    },
    {
      plan: "yearly Withdrawl APY",
      plan01Val: "10 %",
      plan02Val: "40 %",
      plan03Val: "100 %",
    },
    {
      plan: "Minimum Invest",
      plan01Val: "50 $",
      plan02Val: "50 $",
      plan03Val: "200 $",
    },
  ]

  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={`pt-32 pb-12 flex flex-col gap-4 min-h-screen lg:min-h-0`}>
      <div className="w-max flex flex-col gap-2 justify-center items-center mx-auto text-xl">
        <div className="flex flex-col justify-center items-center uppercase leading-loose font-papyrus tracking-widest font-bold text-amber-400">
          Invest with League Of Pharaohs
          <span>and get the heights Annual Percentage Yield</span>
        </div>

        <TitleunderLine />
        <span className="capitalize font-papyrus tracking-widest my-4">
          choose your plan now
        </span>
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-4/5 mx-auto my-4">
        {investingPlan.map((item, i) => {
          return <PlanCard key={i} item={item} />
        })}
      </div>
      <table className="table-auto w-full border-collapse border border-slate-600 max-w-5xl mx-auto my-4">
        <thead>
          <tr>
            <th className="border border-slate-600 py-2 bg-slate-800">PLans</th>
            {investingPlan.map((item, i) => {
              return (
                <th
                  className="border border-slate-600 py-2 bg-slate-800"
                  key={i}>
                  {item.name}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, i) => {
            return (
              <tr key={i} className="text-center">
                <td className="border border-slate-600 p-2">{item.plan}</td>
                <td className="border border-slate-600 p-2">
                  {item.plan01Val}
                </td>
                <td className="border border-slate-600 p-2">
                  {item.plan02Val}
                </td>
                <td className="border border-slate-600 p-2">
                  {item.plan03Val}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </motion.div>
  )
}

Investing.getLayout = DefaultLayout

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
