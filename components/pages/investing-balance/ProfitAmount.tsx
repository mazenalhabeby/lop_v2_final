import {investDetailsType} from "@/pages/investing-balance"
import React, {useEffect, useState} from "react"
import {AiFillCheckCircle} from "react-icons/ai"
import ReactPaginate from "react-paginate"

interface ProfitAmountType {
  item: investDetailsType
}

type itemWithdarawlType = {
  itemCount: number
  amount: string
  py: string
  pyProfit: number
  pyProfitByPeriod: number
  withdrawalAppear: boolean
  withdrawalTime: number
  _key: string
  _type: string
}

const ProfitAmount: React.FC<ProfitAmountType> = ({item}) => {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentItems, setCurrentItems] = useState<itemWithdarawlType[]>([])
  const [appearAmount, setAppearAmount] = useState([])
  const itemsPerPage = 6
  const balnaceHeader = [
    {title: "#", cols: "col-span-1"},
    {title: "Date", cols: "col-span-3"},
    {title: "Available", cols: "col-span-4"},
    {title: "Status", cols: "col-span-4"},
  ]
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(item.withdrawal.slice(itemOffset, endOffset))
    setPageCount(
      Math.ceil(
        item.withdrawal.filter((item) => item.withdrawalAppear === true)
          .length / itemsPerPage
      )
    )
  }, [itemOffset, itemsPerPage, item])

  const handlePageClick = (event: {selected: number}) => {
    const newOffset = (event.selected * itemsPerPage) % item?.withdrawal.length
    setItemOffset(newOffset)
  }

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className=" grid grid-cols-12 justify-items-center">
        {balnaceHeader.map((item, i) => {
          return (
            <span key={i} className={`${item.cols}`}>
              {item.title}
            </span>
          )
        })}
      </div>
      {currentItems.map((item, i) => {
        if (item.withdrawalAppear) {
          return (
            <div key={i} className="grid grid-cols-12 justify-items-center">
              <span className=" col-span-1">{item.itemCount}</span>
              <span className=" col-span-3">
                {new Date(item.withdrawalTime).toDateString()}
              </span>
              <span className=" col-span-4">
                {Number(item.pyProfitByPeriod).toLocaleString()}
                USDT
              </span>
              <span className="col-span-4 flex flex-row gap-2 items-center">
                <span>DONE</span>
                <AiFillCheckCircle className="text-green-500" />
              </span>
            </div>
          )
        }
      })}
      {item.withdrawal.filter((item) => item.withdrawalAppear === true).length >
        6 && (
        <ReactPaginate
          breakLabel=". . ."
          nextLabel={`Next >`}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={`< previous`}
          //@ts-ignore
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      )}
    </div>
  )
}

export default ProfitAmount
