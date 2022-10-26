import DividerWithWord from "@/components/DividerWithWord"
import {investDetailsType} from "@/pages/investing-balance"
import React, {useEffect, useState} from "react"
import {AiFillCheckCircle} from "react-icons/ai"
import {ImSpinner5} from "react-icons/im"
import {MdContentCopy, MdError} from "react-icons/md"
import ReactPaginate from "react-paginate"

interface WithdrawalAmountType {
  item: investDetailsType
}

type itemWithdarawlType = {
  itemCount: number
  amount: string
  status: number
  transactionLink: string
  withdrawalTime: number
  _key: string
  _type: string
}

const WithdrawalAmount: React.FC<WithdrawalAmountType> = ({item}) => {
  const [pageCountWithdrawal, setPageCountWithdrawal] = useState(0)
  const [itemOffsetWithdrawal, setItemOffsetWithdrawal] = useState(0)
  const [currentItemsWithdrawal, setCurrentItemsWithdrawal] = useState<
    itemWithdarawlType[]
  >([])
  const [showCopied, setShowCopied] = useState(false)

  useEffect(() => {
    if (showCopied) {
      setTimeout(() => {
        setShowCopied(false)
      }, 1000)
    }
  }, [showCopied])
  const itemsPerPageWithdrawal = 6
  const balnaceHeader = [
    {title: "#", cols: "col-span-1"},
    {title: "Date", cols: "col-span-2"},
    {title: "Amount", cols: "col-span-3"},
    {title: "Status", cols: "col-span-3"},
    {title: "Transaction Link", cols: "col-span-3"},
  ]

  useEffect(() => {
    const endOffset = itemOffsetWithdrawal + itemsPerPageWithdrawal
    setCurrentItemsWithdrawal(
      item.withdrawalsAmountDetails?.slice(itemOffsetWithdrawal, endOffset)
    )
    setPageCountWithdrawal(
      Math.ceil(item.withdrawalsAmountDetails?.length / itemsPerPageWithdrawal)
    )
  }, [itemOffsetWithdrawal, itemsPerPageWithdrawal, item])

  const handlePageClick = (event: {selected: number}) => {
    const newOffset =
      (event.selected * itemsPerPageWithdrawal) % item?.withdrawal.length
    setItemOffsetWithdrawal(newOffset)
  }

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className=" grid grid-cols-12 justify-items-center text-xs lg:text-base">
        {balnaceHeader.map((item, i) => {
          return (
            <span key={i} className={`${item.cols}`}>
              {item.title}
            </span>
          )
        })}
      </div>
      {currentItemsWithdrawal == undefined && (
        <div className="w-full h-14 flex justify-center items-center text-lg capitalize text-slate-500">
          <span>You Did not Make any Withdrawal Transaction Yet!</span>
        </div>
      )}
      {currentItemsWithdrawal?.map((item, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-12 justify-items-center text-sm lg:text-base">
            <span className=" col-span-1">{item.itemCount}</span>
            <span className=" col-span-2">
              {new Date(item.withdrawalTime).toDateString()}
            </span>
            <span className=" col-span-3">{item.amount} USDT</span>
            <span className="col-span-3 ">
              <span className="flex flex-row gap-2 items-center">
                {item.status == 1 ? (
                  <>
                    <span>In Proccess</span>
                    <ImSpinner5 className="text-amber-400 animate-spin" />
                  </>
                ) : item.status == 2 ? (
                  <>
                    <span>Error</span>
                    <MdError className="text-red-500" />
                  </>
                ) : (
                  item.status == 3 && (
                    <>
                      <span>DONE</span>
                      <AiFillCheckCircle className="text-green-500" />
                    </>
                  )
                )}
              </span>
            </span>
            <div className=" col-span-3 w-20 lg:w-40 flex flex-row gap-2 items-center px-2 relative">
              <p className="flex-1 truncate">{item.transactionLink}</p>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(item.transactionLink)
                  setShowCopied(true)
                }}>
                <MdContentCopy />
              </button>
              <div
                className={`${
                  showCopied ? "flex" : "hidden"
                } absolute -top-6 ltr:right-1 rtl:left-1 bg-green-600 px-1 rounded-lg`}>
                Copied
              </div>
            </div>
          </div>
        )
      })}
      {item.withdrawalsAmountDetails?.length > 6 && (
        <ReactPaginate
          breakLabel=". . ."
          nextLabel={`Next >`}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCountWithdrawal}
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
      <div className="flex flex-row gap-2 capitalize items-center justify-center text-sm text-amber-600">
        <span>Note :</span>
        <span>Withdrawal Proccess can take up to 72 hours</span>
      </div>
    </div>
  )
}

export default WithdrawalAmount
