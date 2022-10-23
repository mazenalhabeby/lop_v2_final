import React, {useState, useEffect} from "react"

const InvestingBalanceSelleton = (item: any) => {
  const [listRender, setListRender] = useState(0)
  useEffect(() => {
    if (item.item == 0) {
      setListRender(1)
    } else if (item.item > 6) {
      setListRender(6)
    } else {
      setListRender(item.item)
    }
  }, [item])

  return (
    <>
      {Array(listRender)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className=" border-2 border-slate-600 text-slate-400 rounded shadow-lg">
              <div className="grid grid-cols-12 gap-6 lg:gap-0 justify-items-center p-4 animate-pulse min-h-[59.2px]">
                <div className="col-span-4 lg:col-span-2 w-32 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-2 w-32 h-5 bg-slate-400 rounded"></div>
                <div className="col-span-4 lg:col-span-1 w-20 h-5 bg-slate-400 rounded"></div>
                <span className="col-span-12 lg:col-span-1 w-6 h-6 bg-slate-400 rounded-full"></span>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default InvestingBalanceSelleton
