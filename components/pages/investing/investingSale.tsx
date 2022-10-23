import {useWeb3React} from "@web3-react/core"
import {parseEther} from "@ethersproject/units"
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import React, {useState, FC, useEffect} from "react"
import {useForm} from "react-hook-form"
import toast from "react-hot-toast"
import {GiEyeOfHorus} from "react-icons/gi"
import {ImSpinner2} from "react-icons/im"
import {nanoid} from "nanoid"
import {client} from "@/libs/sanity"

type InvestingSale = {
  getUserBalance: Function
  contract: any
  utcTimeStamp: any
}

const InvestingSale: FC<InvestingSale> = ({
  getUserBalance,
  contract,
  utcTimeStamp,
}) => {
  const {data: session} = useSession()
  const [usdtAmount, setUsdtAmount] = useState("")
  const [transactionLoading, setTransactionLoading] = useState(false)
  const {register, handleSubmit, watch, formState, reset} = useForm({
    mode: "onChange",
  })
  const router = useRouter()

  const currentPlan = router.query.slug

  const [planType, setPlantype] = useState()
  const [py, setPy] = useState("10")
  const [withdrawalPeriod, setWithdrawalPeriod] = useState("1")

  const onLopChange = (e: any) => {
    setUsdtAmount(e.target.value)
  }

  const PrincePlan = [
    {label: "yearly Withdrawl", value: "oneTime", inputName: "value"},
  ]

  const KingPlan = [
    {label: "monthly Withdrawl", value: "monthly", inputName: "value"},
    {label: "yearly Withdrawl", value: "oneTime", inputName: "value"},
  ]
  const RoyalPlan = [
    {label: "weekly Withdrawl", value: "weekly", inputName: "value"},
    {label: "monthly Withdrawl", value: "monthly", inputName: "value"},
    {label: "yearly Withdrawl", value: "oneTime", inputName: "value"},
  ]
  const terms = [
    {
      name: "term01",
      appear: "all",
      details:
        "I Agree to subscribe to investment Contract and receive my profits as i have choose in the withdrawal plan and i agree to receive my investment funds after the contract period is over",
    },
    {
      name: "term02",
      appear: "all",
      details:
        "I Agree that I understand I can't get my investment funds back  before the contract period is over .",
    },
    {
      name: "term03",
      appear: "all",
      details:
        "I accept to withdraw my profits and investment funds only to the wallet address that I used to subscribe to the investing contract and i understand that i can't change the withdrawal wallet address for any reason",
    },
    {
      name: "term04",
      appear: "royal",
      details:
        "I accept and understand that If I decided to terminate the ROYAL investment contract during or before the end of first 3 months of the total contract period , I will only get 50% of my investment funds charge back , and will also deduct from the 50% refund all profits i have received during the investment contract period.",
    },
  ]

  useEffect(() => {
    currentPlan == "prince-plane"
      ? setWithdrawalPeriod("1")
      : currentPlan == "king-plan" && planType == "monthly"
      ? setWithdrawalPeriod("6")
      : currentPlan == "king-plan" && planType == "oneTime"
      ? setWithdrawalPeriod("1")
      : currentPlan == "royal-plan" && planType == "weekly"
      ? setWithdrawalPeriod("48")
      : currentPlan == "royal-plan" && planType == "monthly"
      ? setWithdrawalPeriod("12")
      : currentPlan == "royal-plan" &&
        planType == "oneTime" &&
        setWithdrawalPeriod("1")
  }, [planType])

  useEffect(() => {
    currentPlan == "prince-plane"
      ? setPy("10")
      : currentPlan == "king-plan" && planType == "monthly"
      ? setPy("30")
      : currentPlan == "king-plan" && planType == "oneTime"
      ? setPy("40")
      : currentPlan == "royal-plan" && planType == "weekly"
      ? setPy("60")
      : currentPlan == "royal-plan" && planType == "monthly"
      ? setPy("75")
      : currentPlan == "royal-plan" && planType == "oneTime" && setPy("100")
  }, [planType])

  const onSubmit = async (data: any) => {
    sentTransaction()
  }

  useEffect(() => {
    setPlantype(watch("value"))
  }, [watch("value")])

  const recieverAddress = "0x6A741a293fE0cF3779DcBaD9055F1B0c0B0a7D5A"

  const context = useWeb3React()
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context

  const minimumInvesting = currentPlan == "royal-plan" ? 200 : 50

  let arr = Array(Number(withdrawalPeriod)).fill({
    py: py,
    amount: usdtAmount,
    pyProfit: (Number(usdtAmount) * Number(py)) / 100,
    pyProfitByPeriod:
      (Number(usdtAmount) * Number(py)) / 100 / Number(withdrawalPeriod),
    withdrawalAppear: false,
  })

  let withdrawDetails = arr.map((item, index) => ({
    ...item,
    withdrawalTime:
      withdrawalPeriod == "48"
        ? new Date(utcTimeStamp).setHours(
            new Date(utcTimeStamp).getHours() + 24 * (7 * (index + 1))
          )
        : withdrawalPeriod == "12" || withdrawalPeriod == "6"
        ? new Date(utcTimeStamp).setMonth(
            new Date(utcTimeStamp).getMonth() + (index + 1)
          )
        : withdrawalPeriod == "1" &&
          new Date(utcTimeStamp).setFullYear(
            new Date(utcTimeStamp).getFullYear() + 1
          ),
    _key: nanoid(),
    _type: "withdrawalDetails",
    itemCount: index + 1,
  }))

  const postTransaction = async () => {
    const transactionInfo = {
      walletAddress: account,
      amount: watch("amount"),
      plan: currentPlan,
      planPeriod:
        currentPlan == "prince-plan"
          ? 3
          : currentPlan == "king-plan"
          ? 6
          : currentPlan == "royal-plan" && 12,
      py: py,
      withdrawalPeriod: withdrawalPeriod,
      planType: watch("value"),
      withdrawal: withdrawDetails,
      user: session?.id,
    }

    const result = await fetch(`/api/addInvest`, {
      body: JSON.stringify(transactionInfo),
      method: "POST",
    })
    const json = await result.json()
  }

  const sentTransaction = async () => {
    setTransactionLoading(true)
    try {
      let value = parseEther(usdtAmount?.toString())
      const tx = await contract.transfer(recieverAddress, value)
      let listen = await tx.wait()
      if (listen.confirmations > 0) {
        postTransaction()
        setTransactionLoading(false)
        router.push("/investing-balance")
        getUserBalance()
        reset()
      }
    } catch (err: any) {
      if (err) {
        setTransactionLoading(false)
        if (err.code == "-32603") {
          toast.error("insufficient funds")
        } else if (err.code == "4001") {
          toast.error("You have denied transation")
        }
      }
    }
  }

  // let editUser = async () => {
  //   await client.create({
  //     _createdAt: "2022-10-15T17:26:20Z",
  //     _updatedAt: "2022-10-15T17:26:20Z",
  //     _type: "investing",
  //     walletAddress: account,
  //     amount: watch("amount"),
  //     plan: currentPlan,
  //     planPeriod:
  //       currentPlan == "prince-plan"
  //         ? 3
  //         : currentPlan == "king-plan"
  //         ? 6
  //         : currentPlan == "royal-plan" && 12,
  //     py: py,
  //     withdrawalPeriod: withdrawalPeriod,
  //     planType: watch("value"),
  //     withdrawal: withdrawDetails,
  //     user: session?.id,
  //   })
  // }

  return (
    <div className=" w-full lg:w-full max-w-md relative">
      <div className="nm-flat-slate-700-lg rounded-lg px-8 pt-6 pb-10 text-center flex flex-col space-y-6 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-4">
          {currentPlan == "prince-plan" && (
            <div className="flex flex-row justify-between items-center w-full">
              <input
                type="hidden"
                {...register("planType")}
                id="planType"
                value={currentPlan}
                readOnly
              />
              {PrincePlan.map((item, i) => {
                return (
                  <div key={i} className={"relative"}>
                    <input
                      {...register(item.inputName)}
                      type={"hidden"}
                      value={"oneTime"}
                      readOnly
                    />
                  </div>
                )
              })}
            </div>
          )}

          {currentPlan == "king-plan" && (
            <div className="flex flex-row justify-between items-center w-full">
              <input
                type="hidden"
                {...register("planType")}
                id="planType"
                value={currentPlan}
                readOnly
              />
              {KingPlan.map((item, i) => {
                return (
                  <div key={i} className={"relative"}>
                    <label
                      htmlFor={item.value}
                      className={`flex flex-row gap-2 items-center `}>
                      <input
                        {...register(item.inputName, {
                          required: {
                            value: true,
                            message: "Select your plan",
                          },
                        })}
                        type={"radio"}
                        id={item.value}
                        value={item.value}
                        className={"peer hidden"}
                      />
                      <div className="w-8 h-8 border-2 rounded peer-checked:border-amber-500"></div>
                      <GiEyeOfHorus className="text-2xl opacity-0 peer-checked:opacity-100 peer-checked: text-amber-500 absolute left-1" />
                      <span className="peer-checked:text-amber-500 capitalize">
                        {item.label}
                      </span>
                    </label>
                  </div>
                )
              })}
            </div>
          )}

          {currentPlan == "royal-plan" && (
            <div className="flex flex-row flex-wrap gap-4 justify-between items-center w-full">
              <input
                type="hidden"
                {...register("planType")}
                id="planType"
                value={currentPlan}
                readOnly
              />
              {RoyalPlan.map((item, i) => {
                return (
                  <div key={i} className={"relative"}>
                    <label
                      htmlFor={item.value}
                      className={`flex flex-row gap-2 items-center `}>
                      <input
                        {...register(item.inputName, {
                          required: {
                            value: true,
                            message: "Select your plan",
                          },
                        })}
                        type={"radio"}
                        id={item.value}
                        value={item.value}
                        className={"peer hidden"}
                      />
                      <div className="w-8 h-8 border-2 rounded peer-checked:border-amber-500"></div>
                      <GiEyeOfHorus className="text-2xl opacity-0 peer-checked:opacity-100 peer-checked: text-amber-500 absolute left-1" />
                      <span className="peer-checked:text-amber-500 capitalize">
                        {item.label}
                      </span>
                    </label>
                  </div>
                )
              })}
            </div>
          )}
          <div className="w-full nm-inset-slate-700-lg flex flex-row rounded-lg px-2 divide-x divide-slate-600">
            <input
              {...register("amount", {
                required: {value: true, message: "The amount is required"},
                min: {
                  value: minimumInvesting,
                  message: `The minimum investment is ${minimumInvesting} USDT`,
                },
              })}
              className="flex-1 bg-transparent outline-none placeholder:text-slate-500 text-center placeholder:text-left placeholder:text-xs md:placeholder:text-base"
              placeholder={`Minimum investment is ${minimumInvesting} USDT`}
              autoComplete="off"
              onChange={onLopChange}
              step="any"
            />
            <span className="py-3 pl-2">USDT</span>
          </div>
          {terms.map((item, i) => {
            return (
              <div key={i}>
                {item.appear == "all" && (
                  <div className="flex flex-row gap-2 items-start">
                    <input
                      type={"checkbox"}
                      {...register(item.name, {
                        required: {
                          value: true,
                          message: "need to accept all the terms",
                        },
                      })}
                    />
                    <label className="text-xs text-start">
                      {" "}
                      {item.details}
                    </label>
                  </div>
                )}
                {item.appear == "royal" && currentPlan == "royal-plan" && (
                  <div className="flex flex-row gap-2 items-start">
                    <input
                      type={"checkbox"}
                      {...register(item.name, {
                        required: {
                          value: true,
                          message: "need to accept all the terms",
                        },
                      })}
                    />
                    <label className="text-xs text-start">
                      {" "}
                      {item.details}
                    </label>
                  </div>
                )}
              </div>
            )
          })}
          <button
            type="submit"
            className=" flex flex-row items-center gap-1 bg-cyan-300 text-slate-700 px-10 py-2 rounded-full disabled:bg-slate-500 disabled:text-slate-700"
            disabled={!formState.isValid || transactionLoading || !account}>
            {transactionLoading && <ImSpinner2 className=" animate-spin" />} Buy
          </button>
        </form>
      </div>
    </div>
  )
}

export default InvestingSale
