import {client} from "@/libs/sanity"
import {getSession} from "next-auth/react"
import React from "react"

const Test = ({utcTimeStamp}: any) => {
  const timeStamp = new Date().toDateString()
  const UTCtimeStamp = new Date(utcTimeStamp).toDateString()

  console.log(UTCtimeStamp)
  return (
    <div>
      <div>{UTCtimeStamp}</div>
      <div>{timeStamp}</div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    }
  }

  const utcTimeStamp = new Date().getTime()

  const query = `*[_type=="investing"&& user._ref == $userId] | order(_createdAt) {
    _id,
    ...
  }`

  const userAmount = await client.fetch(query, {
    userId: session.id,
  })

  console.log(
    userAmount.map((item: any) => {
      return item.plan
    })
  )

  return {
    props: {utcTimeStamp},
  }
}

export default Test
