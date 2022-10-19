export default {
  name: "token-sale",
  title: "Token Sale",
  type: "document",
  fields: [
    {
      name: "walletAddress",
      type: "string",
    },
    {
      name: "amount",
      type: "string",
    },
    {
      name: "seedRound",
      type: "string",
    },
    {
      name: "coinUsed",
      type: "string",
    },
    {
      name: "coinPrice",
      type: "number",
    },
    {name: "transactionType", type: "string"},
    {name: "user", title: "User", type: "reference", to: {type: "user"}},
  ],
}
