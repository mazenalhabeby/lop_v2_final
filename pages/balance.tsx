import {motion} from 'framer-motion'
import DefaultLayout from '@/layouts/DefaultLayout'
import {getSession} from 'next-auth/react'
import Link from 'next/link'
import {client} from '@/libs/sanity'
import {useEffect, useState} from 'react'
import UnderLink from '@/assets/svg/UnderLink'
import TitleunderLine from '@/components/TitleunderLine'
import {IoMdRemove} from 'react-icons/io'

interface BalanceProps {
  userAmount: {
    amount: string
    coinPrice: number
    coinUsed: string
    seedRound: string
    user: {_ref: string; _type: string}
    walletAddress: string
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
  }[]
}
const tableHeader = [
  {title: 'Data'},
  {title: 'Value'},
  {title: 'Sale Round'},
  {title: 'round price'},
  {title: 'Balance'},
  {title: 'Wallet Address'},
  {title: 'Distribution'},
]

export default function Balance({userAmount}: BalanceProps) {
  const icoRate = 0.015
  const preSale = 0.025

  const [icoTotal, setIcoTotal] = useState<any>([])

  useEffect(() => {
    const totalIco = userAmount.filter((item) => {
      item.seedRound == 'ico'
    })

    setIcoTotal(totalIco)
  }, [])

  return (
    <motion.div
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className="pt-24 pb-12 flex flex-col  justify-center items-start lg:items-center gap-4 overflow-x-auto">
      <div className="flex flex-col gap-2 items-center justify-center w-max font-papyrus capitalize tracking-wider font-semibold text-2xl">
        <span>your Transaction history</span>
        <TitleunderLine />
      </div>
      <div className="xl:w-4/5 min-h-[18rem] min-w-max">
        <table className="table-auto w-full border-collapse border border-slate-600">
          <thead>
            <tr>
              {tableHeader.map((item, i) => {
                return (
                  <th
                    key={i}
                    className="border border-slate-600 py-2 bg-slate-800">
                    {item.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {userAmount.length > 0 &&
              userAmount.map(
                (
                  item: {
                    amount: string
                    coinPrice: number
                    coinUsed: string
                    seedRound: string
                    user: {
                      _ref: string
                      _type: string
                    }
                    walletAddress: string
                    _createdAt: string
                    _id: string
                    _rev: string
                    _type: string
                    _updatedAt: string
                  },
                  i: number
                ) => {
                  return (
                    <tr key={i} className="text-center">
                      <td className="border border-slate-600 p-2">
                        {new Date(item._createdAt)
                          .toISOString()
                          .substring(0, 10)}
                      </td>
                      <td className="border border-slate-600 p-2 uppercase">{`${item.amount} ${item.coinUsed}`}</td>
                      <td className="border border-slate-600 p-2">
                        {item.seedRound}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.seedRound == 'ico'
                          ? `${icoRate} $`
                          : item.seedRound == 'preSale'
                          ? `${preSale} $`
                          : undefined}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.seedRound == 'ico'
                          ? `${(Number(item.amount) / icoRate).toLocaleString(
                              'en-US'
                            )} LOP`
                          : item.seedRound == 'preSale'
                          ? `${(
                              (Number(item.amount) * item.coinPrice) /
                              preSale
                            ).toLocaleString('en-US')} LOP`
                          : undefined}
                      </td>
                      <td className="border border-slate-600 p-2">
                        {item.walletAddress.substring(0, 6)}...
                        {item.walletAddress.substring(
                          item.walletAddress.length - 4
                        )}
                      </td>
                      <td className="border border-slate-600 p-2 text-xs max-w-[2rem] px-2">
                        {item.seedRound == 'ico'
                          ? 'you will receive your tokens all on distribution day'
                          : item.seedRound == 'preSale'
                          ? 'you will receive your tokens linear vesting on 10 months'
                          : undefined}
                      </td>
                    </tr>
                  )
                }
              )}
          </tbody>
        </table>
        {userAmount.length === 0 && (
          <div className="border border-slate-600 border-t-0 w-full flex flex-col gap-4 justify-center items-center py-14">
            <span className="text-2xl capitalize font-semibold tracking-widest text-slate-400">
              you do not have a balance yet!
            </span>
            <Link href={'/sale-round'}>
              <a className=" bg-amber-600 py-2 px-4 rounded-lg text-xl uppercase font-semibold tracking-wider shadow-lg">
                Buy LOP
              </a>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

Balance.getLayout = DefaultLayout

export async function getServerSideProps(context: any) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    }
  }

  const query = `*[_type=="token-sale"&& user._ref == $userId] | order(_createdAt) {
    _id,
    ...
  }`

  const userAmount = await client.fetch(query, {
    userId: session.id,
  })
  return {
    props: {session, userAmount},
  }
}
