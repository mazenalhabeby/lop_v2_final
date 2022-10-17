import PlanCard from "@/components/PlanCard"
import TitleunderLine from "@/components/TitleunderLine"
import DefaultLayout from "@/layouts/DefaultLayout"
import {motion} from "framer-motion"
import {getSession} from "next-auth/react"
import React from "react"

export default function Investing() {
  const investingPlan = [
    {
      name: "Prince Contract",
      minInvest: 50,
      label: false,
      slug: "prince-plan",
      period: "3 Months",
      withdrawal: [{type: "one Time", ap: "10%", label: "Total profit"}],
    },
    {
      name: "King Contract",
      minInvest: 50,
      label: false,
      slug: "king-plan",
      period: "6 Months",
      withdrawal: [
        {
          type: "monthly",
          ap: "30%",
          monthlyProfit: "5%",
          label: "monthly profit",
        },
        {
          type: "one Time",
          ap: "40%",
          monthlyProfit: "-",
          label: "Total profit",
        },
      ],
    },
    {
      name: "Royal Contract",
      minInvest: 200,
      label: true,
      slug: "royal-plan",
      period: "1 Year",
      withdrawal: [
        {
          type: "Weekly",
          ap: "60%",
          weeklyProfit: "1.25%",
          monthlyProfit: "5%",
          label: "Weekly profit",
        },
        {
          type: "Monthly",
          ap: "75%",
          weeklyProfit: "-",
          monthlyProfit: "6.25%",
          label: "monthly profit",
        },
        {
          type: "one Time",
          ap: "100%",
          weeklyProfit: "-",
          monthlyProfit: "-",
          label: "Total profit",
        },
      ],
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
      className={`pt-32 flex flex-col gap-4 min-h-screen lg:min-h-0`}>
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
      <div className="grid grid-cols-12 gap-20 w-4/5 mx-auto my-8">
        {investingPlan.map((item, i) => {
          return <PlanCard key={i} item={item} />
        })}
      </div>
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
