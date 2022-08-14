import {parseEther} from '@ethersproject/units'
import {useWeb3React} from '@web3-react/core'
import {ethers, providers} from 'ethers'
import {useSession} from 'next-auth/react'
import Image from 'next/image'
import {FC, useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import toast from 'react-hot-toast'
import {BiErrorCircle} from 'react-icons/bi'
import {ImSpinner2} from 'react-icons/im'
declare var window: any

interface SaleSideProps {
  getUserBalance: Function
}

const SaleSide: FC<SaleSideProps> = ({getUserBalance}) => {
  const recieverAddress = '0x6A741a293fE0cF3779DcBaD9055F1B0c0B0a7D5A'

  const {data: session} = useSession()

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

  const {register, handleSubmit, watch, formState, reset} = useForm({
    defaultValues: {amount: 0},
  })

  const onSubmit = (data: any) => {
    sentTransaction()
  }

  const tokenRate = 0.025

  const [transactionLoading, setTransactionLoading] = useState(false)
  const [buyLopAmount, setBuyLopAmount] = useState(0)
  const [amount, setAmount] = useState('')
  const [BNBPrince, setBNBPrince] = useState(0)

  const onLopChange = (e: any) => {
    setBuyLopAmount(e.target.value)
    setAmount(e.target.value)
  }

  const fetchingPrice = async () => {
    const priceUrl =
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin&vs_currencies=usd'
    const response = await fetch(priceUrl)
    const data = await response.json()
    setBNBPrince(data['binancecoin'].usd)
  }

  useEffect(() => {
    fetchingPrice()

    setInterval(() => {
      fetchingPrice()
    }, 60000)
  }, [])

  const postTransaction = async () => {
    const transactionInfo = {
      walletAddress: account,
      amount: amount,
      seedRound: 'preSale',
      coinUsed: 'bnb',
      coinPrice: Number(BNBPrince),
      user: session?.id,
    }

    const result = await fetch(`/api/addTransaction`, {
      body: JSON.stringify(transactionInfo),
      method: 'POST',
    })
    const json = await result.json()
  }

  const tx = {
    from: account,
    to: recieverAddress,
  }

  const sentTransaction = async () => {
    setTransactionLoading(true)
    try {
      let value = parseEther(buyLopAmount.toString())

      const provider = new providers.Web3Provider(library.provider)
      const signer = provider.getSigner()
      const tx = await signer.sendTransaction({
        to: recieverAddress,
        value: value,
      })
      let listen = await tx.wait()

      if (listen.confirmations > 0) {
        postTransaction()
        setTransactionLoading(false)
        toast.success(
          'Transaction Successful! Check your balance in your account'
        )
        getUserBalance()
        reset()
      }
    } catch (err: any) {
      if (err) {
        setTransactionLoading(false)
        if (err.code == '-32603') {
          toast.error('insufficient funds')
        }
      }
    }
  }

  return (
    <div className=" w-full lg:w-full max-w-md relative">
      <div className="nm-flat-slate-700-lg rounded-lg px-8 py-10 text-center flex flex-col space-y-6 ">
        <form
          className="flex flex-col items-center space-y-4"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center justify-center gap-2 text-sm">
              <Image
                src="/images/bnb-icon2_2x.webp"
                width={15}
                height={15}
                alt={'BNB icon'}
              />
              <span>1 BNB =</span>
              <span>{BNBPrince} $</span>
            </div>
            <p className="text-xs place-self-end">{`${buyLopAmount} BNB = ${(
              (Number(buyLopAmount) * BNBPrince) /
              tokenRate
            ).toLocaleString()} LOP`}</p>
          </div>

          <div className="w-full nm-inset-slate-700-lg flex flex-row rounded-lg px-2 divide-x divide-slate-600">
            <input
              {...register('amount', {
                required: {value: true, message: 'The amount is required'},
                min: {
                  value: 1 / BNBPrince,
                  message: `The minimum investment is ${(
                    101 / BNBPrince
                  ).toFixed(4)} BNB`,
                },
                max: {
                  value: 5000000,
                  message: `The maximum investment is 5000`,
                },
              })}
              type="number"
              className="flex-1 bg-transparent outline-none placeholder:text-slate-500 text-center placeholder:text-left placeholder:text-xs md:placeholder:text-base"
              placeholder="Minimum investment is 100 USD"
              autoComplete="off"
              onChange={onLopChange}
              step="any"
            />
            <span className="py-3 pl-2">BNB</span>
          </div>
          <div className="w-full h-4">
            {formState.errors.amount && (
              <span className="flex flex-row items-center gap-1 text-xs text-red-400 place-self-start transition-all duration-700">
                <BiErrorCircle className="text-base" />
                {formState.errors.amount?.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className=" flex flex-row items-center gap-1 bg-cyan-300 text-slate-700 px-10 py-2 rounded-full disabled:bg-slate-500 disabled:text-slate-700"
            disabled={transactionLoading}>
            {transactionLoading && <ImSpinner2 className=" animate-spin" />} Buy
            now
          </button>
        </form>
      </div>
    </div>
  )
}

export default SaleSide
