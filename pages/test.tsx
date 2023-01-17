import {client} from "@/libs/sanity"
import {getSession} from "next-auth/react"
import {type} from "os"
import React, {useEffect, useState} from "react"
import {CSVLink} from "react-csv"

const Test = () => {
  const [result, setResult] = useState<any[]>([])
  const query = `*[_type=="token-sale"] {
      _id, ..., user->{name, _id}
  }`

  useEffect(() => {
    client.fetch(query).then((data) => {
      setResult(data)
    })
  }, [])

  console.log(result[0])

  const header = [
    {key: "_id", label: "ID"},
    {key: "walletAddress", label: "walletAddress"},
    {key: "amount", label: "amount"},
    {key: "coinPrice", label: "coinPrice"},
    {key: "coinUsed", label: "coinUsed"},
    {key: "seedRound", label: "seedRound"},
    {key: "user.name", label: "user name"},
    {key: "user._id", label: "user id"},
    {key: "_rev", label: "Rev"},
    {key: "_type", label: "Type"},
    {key: "_createdAt", label: "Created At"},
    {key: "_updatedAt", label: "Updated At"},
  ]

  const csvLink = {
    filename: "saletoken.csv",
    headers: header,
    data: result,
  }

  return (
    <div>
      <CSVLink {...csvLink}>Download me</CSVLink>
    </div>
  )
}

export default Test
