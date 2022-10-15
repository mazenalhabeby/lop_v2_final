import React from "react"

interface PLanCardType {
  item: {
    name: string
    apy: string
    minInvest: number
    label: boolean
  }
}

const PlanCard: React.FC<PLanCardType> = ({item}) => {
  return (
    <div className=" nm-flat-slate-700 py-6 px-10 rounded-lg text-center flex flex-col justify-center items-center font-semibold gap-2 w-1/4 relative">
      <h2 className=" uppercase text-amber-400 font-aclonica text-2xl">
        {item.name}
      </h2>
      <span className="text-base capitalize">up to {item.apy}% APY</span>
      <span className="text-base capitalize">
        minimum invest {item.minInvest}$
      </span>
      <button className=" bg-cyan-600 p-2 rounded-lg text-base uppercase my-4 shadow-lg">
        get {item.name}
      </button>
      {item.label && (
        <div className=" absolute top-5 -right-6 rotate-45 bg-green-500 px-4 rounded-t-full uppercase">
          best value
        </div>
      )}
    </div>
  )
}

export default PlanCard
