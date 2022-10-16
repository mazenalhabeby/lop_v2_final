import {useWeb3React} from "@web3-react/core"
import {parseEther} from "@ethersproject/units"
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import React, {useState, FC} from "react"
import {useForm} from "react-hook-form"
import toast from "react-hot-toast"
import {GiEyeOfHorus} from "react-icons/gi"
import {ImSpinner2} from "react-icons/im"
import {type} from "os"

type InvestingSale = {
  getUserBalance: Function
  contract: any
}

const InvestingSale: FC<InvestingSale> = ({getUserBalance, contract}) => {
  const {data: session} = useSession()
  const [usdtAmount, setUsdtAmount] = useState("")
  const [transactionLoading, setTransactionLoading] = useState(false)
  const {register, handleSubmit, watch, formState, reset} = useForm({
    mode: "onChange",
  })

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
      details:
        "I agree to subscribe to investment plan and receive my profits as per my plan and recieve my original investment funds after the subscription period is over.",
    },
    {
      name: "term02",
      details:
        "If I choose to terminate the deal before the investment contract period is over, I understand I will not receive my original investment funds.",
    },
    {
      name: "term03",
      details:
        "I accept to withdraw my profits to the original wallet address that I used to subscribe to the investing plans and any change in the wallet address cannot be undone and funds will not be withdrawn except to the original wallet address as per the contract.",
    },
    {
      name: "term04",
      details:
        " I accept and understand that in case of subscription to the (YEARLY INVESTMENT PLAN) I'm able to withdraw my original funds as a charge back with only 50% of my original funds to be funded.",
    },
  ]

  const router = useRouter()

  const currentPlan = router.query.slug

  const onSubmit = async (data: any) => {
    sentTransaction()
  }

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

  const postTransaction = async () => {
    const transactionInfo = {
      walletAddress: account,
      amount: watch("amount"),
      plan: currentPlan,
      planType: watch("value"),
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
                      value={"yearly"}
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
              <div key={i} className="flex flex-row gap-2 items-start">
                <input
                  type={"checkbox"}
                  {...register(item.name, {
                    required: {
                      value: true,
                      message: "need to accept all the terms",
                    },
                  })}
                />
                <label className="text-xs text-start"> {item.details}</label>
              </div>
            )
          })}
          <button
            type="submit"
            className=" flex flex-row items-center gap-1 bg-cyan-300 text-slate-700 px-10 py-2 rounded-full disabled:bg-slate-500 disabled:text-slate-700"
            disabled={!formState.isValid || transactionLoading}>
            {transactionLoading && <ImSpinner2 className=" animate-spin" />} Buy
          </button>
        </form>
      </div>
    </div>
  )
}

export default InvestingSale
