import {client} from "@/libs/sanity"
import {getSession} from "next-auth/react"
import {type} from "os"
import React, {useState} from "react"

type resultType = {
  _createdAt: String
  _id: String
  _rev: String
  _type: String
  _updatedAt: String
  amount: String
  coinPrice: number
  coinUsed: String
  seedRound: String
  user: {
    name: String
  }
  walletAddress: String
}

const Test = () => {
  const [result, setResult] = useState<resultType[]>([])
  const query = `*[_type=="token-sale"] | order(walletAddress) {
     _id,..., user->{name }
  }`

  const userAmount = client.fetch(query).then((data) => {
    setResult(data)
  })

  return (
    <div>
      {result.map((item, i) => {
        return (
          <div key={i} className="grid grid-cols-12 justify-items-center py-1">
            {/* <div className=" col-span-2">{item.user?.name}</div>
            <div className=" col-span-1">{item.coinUsed}</div> */}
            {/* <div className=" col-span-1">{item.coinPrice}</div> */}
            <div className=" col-span-1">{item.amount}</div>
            {/* <div className=" col-span-1">
              {(Number(item.amount) * item.coinPrice).toLocaleString()}
            </div>
            <div className=" col-span-1">{item.seedRound}</div>
            <div className=" col-span-1">
              {item.seedRound == "preSale" ? 0.025 : 0.015}
            </div>
            <div className=" col-span-1">
              {(Number(item.amount) * item.coinPrice) /
                (item.seedRound == "preSale" ? 0.025 : 0.015)}
            </div>
            <div className=" col-span-3">{item.walletAddress}</div> */}
          </div>
        )
      })}
    </div>
  )
}

export default Test
