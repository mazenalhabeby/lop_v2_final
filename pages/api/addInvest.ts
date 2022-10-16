// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiRequest, NextApiResponse} from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = JSON.parse(req.body)

  const mutations = {
    mutations: [
      {
        create: {
          _type: "investing",
          walletAddress: data.walletAddress,
          amount: data.amount,
          plan: data.plan,
          planType: data.planType,
          user: {
            _type: "reference",
            _ref: data.user,
          },
        },
      },
    ],
  }
  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

  const result = await fetch(apiEndpoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  })

  const json = await result.json()
  res.status(200).json({
    //@ts-ignore
    message: "Added!",
  })
}
