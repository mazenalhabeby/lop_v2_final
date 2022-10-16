import Link from "next/link"
import React from "react"

interface PLanCardType {
  item: {
    name: string
    minInvest: number
    label: boolean
    slug: string
    period: string
    withdrawal: {type: string; ap: string}[]
  }
}

const PlanCard: React.FC<PLanCardType> = ({item}) => {
  return (
    <div className=" nm-flat-slate-700 py-6 px-10 rounded-lg text-center flex flex-col justify-center items-center font-semibold gap-2 w-1/4 relative">
      <h2 className=" uppercase text-amber-400 font-aclonica text-2xl">
        {item.name}
      </h2>
      <span className="text-base capitalize">Plan Period : {item.period}</span>
      <span className="text-base capitalize">
        minimum invest {item.minInvest}$
      </span>
      <div className="flex flex-col gap-2">
        <table className="table-auto w-full border-collapse border border-slate-600 max-w-5xl mx-auto my-4">
          <thead>
            <tr>
              <th className="text-xs border border-slate-600 p-2 bg-slate-800">
                Withdrawl Profit
              </th>
              <th className="text-xs border border-slate-600 p-2 bg-slate-800">
                Percentage Yield
              </th>
            </tr>
          </thead>
          <tbody>
            {item.withdrawal.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="border border-slate-600 p-2">{item.type}</td>
                  <td className="border border-slate-600 p-2">{item.ap}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Link href={`/investing/${item.slug}`}>
        <a className=" bg-cyan-600 p-2 rounded-lg text-base uppercase my-4 shadow-lg">
          get {item.name}
        </a>
      </Link>
      {item.label && (
        <div className=" absolute top-5 -right-6 rotate-45 bg-green-500 px-4 rounded-t-full uppercase">
          best value
        </div>
      )}
    </div>
  )
}

export default PlanCard
