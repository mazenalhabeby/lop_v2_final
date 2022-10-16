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
      info: "Prince plan allow you to invest",
      APY: "10 %",
      minInvest: 50,
    },
    {
      name: "king-plan",
      info: "King plan allow you to invest",
      APY: "up to 40 %",
      minInvest: 50,
    },
    {
      name: "royal-plan",
      info: "Royal plan allow you to invest",
      APY: "up to 100 %",
      minInvest: 200,
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
                        {item.name.replace("-", " ")}
                      </h2>
                      <TitleunderLine />
                    </div>
                    <p>{item.info}</p>
                    <div className="flex flex-col divide-y-2 divide-amber-500">
                      <div className="flex flex-row justify-between py-2">
                        <span>APY</span>
                        <span>{item.APY}</span>
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
