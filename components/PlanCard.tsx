import Link from "next/link"
import React from "react"

interface PLanCardType {
  item: {
    name: string
    minInvest: number
    label: boolean
    slug: string
    period: string
    withdrawal: {
      type: string
      ap: string
      weeklyProfit?: string
      monthlyProfit?: string
      label?: string
    }[]
  }
}

const PlanCard: React.FC<PLanCardType> = ({item}) => {
  return (
    <div className=" col-span-4 nm-flat-slate-700 rounded-lg text-center font-semibold relative grid grid-rows-1 px-4 py-6">
      <div className=" row-span-1 flex flex-col justify-between items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className=" uppercase text-amber-400 font-aclonica text-lg">
            {item.name}
          </h2>
          <span className="text-base capitalize">
            Plan Period : {item.period}
          </span>
          <span className="text-base capitalize">
            minimum invest {item.minInvest}$
          </span>
        </div>

        <table className="table-auto w-full border-collapse border border-slate-600 mx-auto my-4">
          <thead>
            <tr>
              <th className="text-sm border border-slate-600 p-2">
                withdrawal plan
              </th>
              {item.withdrawal.map((item, i) => {
                return (
                  <th key={i} className="text-sm border border-slate-600 p-2">
                    {item.label}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {item.withdrawal.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="border border-slate-600 p-2">{item.type}</td>
                  {item.weeklyProfit && (
                    <td className="border border-slate-600 p-2">
                      {item.weeklyProfit}
                    </td>
                  )}
                  {item.monthlyProfit && (
                    <td className="border border-slate-600 p-2">
                      {item.monthlyProfit}
                    </td>
                  )}
                  <td className="border border-slate-600 p-2">{item.ap}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div className=" ">
          <Link href={`/investing/${item.slug}`}>
            <a className=" bg-cyan-600 p-2 rounded-lg text-sm uppercase my-4 shadow-lg">
              get {item.name}
            </a>
          </Link>
        </div>
      </div>
      {item.label && (
        <div className=" absolute top-5 -right-6 rotate-45 bg-green-500 px-4 rounded-t-full uppercase">
          best value
        </div>
      )}
    </div>
  )
}

export default PlanCard
