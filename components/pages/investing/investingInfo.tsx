import TitleunderLine from "@/components/TitleunderLine"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/router"
import React from "react"

const InvestingInfo = () => {
  const router = useRouter()

  const currentPlan = router.query.slug

  const planInfo = [
    {
      name: "prince-plan",
      title: "prince-contract",
      info: "Prince plan allow you to get stable Percentage Yield up to 10% with short time",
      minInvest: 50,
      period: 3,
      withdrawal: [{type: "one Time", ap: "10%"}],
    },
    {
      name: "king-plan",
      title: "king-contract",
      info: "King plan allow you to get stable average Percentage Yield up to 40% with short time",
      minInvest: 50,
      period: 6,
      withdrawal: [
        {type: "monthly", ap: "30%"},
        {type: "one Time", ap: "40%"},
      ],
    },
    {
      name: "royal-plan",
      title: "royal-contract",
      info: "Royal plan allow you to get stable amazing Percentage Yield up to 100% with short time",
      minInvest: 200,
      period: 12,
      withdrawal: [
        {type: "weekly", ap: "60%"},
        {type: "monthly", ap: "75%"},
        {type: "one Time", ap: "100%"},
      ],
    },
  ]

  return (
    <div className=" nm-flat-slate-700-lg px-8 py-10 w-full max-w-2xl rounded-lg">
      <div className="w-full flex flex-col">
        <div className="flex items-center nm-inset-slate-800-lg py-2 justify-center rounded-lg">
          <Link href={"/"}>
            <a>
              <Image
                src={"/images/WEBLOGO.png"}
                alt="Coin"
                width={320}
                height={105}
                priority
              />
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className=" after:content-[' '] after:w-full after:h-0.5 after:block after:my-2 my-6">
          <div className="text-xs md:text-lg tracking-wider text-center">
            {planInfo.map((item, i) => {
              if (item.name == currentPlan) {
                return (
                  <div key={i} className={`flex flex-col gap-4`}>
                    <div className="w-max flex flex-col gap-4 place-self-center">
                      <h2 className=" text-amber-400 font-papyrus font-semibold uppercase  text-xl">
                        {item.title.replace("-", " ")}
                      </h2>
                      <TitleunderLine />
                    </div>
                    <p>{item.info}</p>
                    <div className="flex flex-col divide-y-2 divide-amber-500 ">
                      <div className="flex flex-row justify-between py-2">
                        <span>Plan Period</span>
                        <span>{item.period} Months</span>
                      </div>
                      <div className="flex flex-col py-2 w-full divide-y-2 divide-amber-500">
                        {item.withdrawal.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className={"flex flex-row justify-between"}>
                              <span className="my-2">
                                Withdrawl Profit {item.type}
                              </span>
                              <span className="my-2">
                                Percentage Yield : {item.ap}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                      <div className="flex flex-row justify-between py-2">
                        <span>minimum invest</span>
                        <span>{item.minInvest} $</span>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestingInfo
