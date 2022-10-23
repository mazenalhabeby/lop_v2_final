import {client} from "@/libs/sanity"
import {investingPlan, referralUsers, refferalQUERY, userQUERY} from "./query"

export const fetchingUser = async (id: any) => {
  const currentUser = await client.fetch(userQUERY, {
    userId: id,
  })

  return currentUser
}

export const fetchingRefferalUser = async (id: any) => {
  const currentUser = await client.fetch(refferalQUERY, {
    userId: id,
  })

  return currentUser
}

export const fetchingRefferalUsers = async (Code: any) => {
  const currentUsers = await client.fetch(referralUsers, {
    refId: Code,
  })

  return currentUsers
}

export const fetchinginvestingPlan = async (id: any) => {
  const invesingPlan = await client.fetch(investingPlan, {
    userId: id,
  })
  return invesingPlan
}
