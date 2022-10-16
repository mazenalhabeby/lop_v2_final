import DividerWithWord from "@/components/DividerWithWord"
import Image from "next/image"
import {useRouter} from "next/router"
import React from "react"
import {useForm} from "react-hook-form"
import {BiRestaurant} from "react-icons/bi"
import {GiEyeOfHorus} from "react-icons/gi"

const InvestingSale = ({getUserBalance}: any) => {
  const {register, handleSubmit, watch, formState, reset} = useForm({
    mode: "onChange",
  })
  const PrincePlan = [
    {label: "yearly Withdrawl", value: "yearly", inputName: "value"},
  ]

  const KingPlan = [
    {label: "monthly Withdrawl", value: "monthly", inputName: "value"},
    {label: "yearly Withdrawl", value: "yearly", inputName: "value"},
  ]
  const RoyalPlan = [
    {label: "weekly Withdrawl", value: "weekly", inputName: "value"},
    {label: "monthly Withdrawl", value: "monthly", inputName: "value"},
    {label: "yearly Withdrawl", value: "yearly", inputName: "value"},
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

  const onSubmit = (data: any) => {
    console.log(data)
  }

  console.log(formState.isValid)

  const minimumInvesting = currentPlan == "royal-plan" ? 200 : 50

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
            disabled={!formState.isValid}>
            Buy
          </button>
        </form>
      </div>
    </div>
  )
}

export default InvestingSale
