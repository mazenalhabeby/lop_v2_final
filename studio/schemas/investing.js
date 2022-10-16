export default {
  name: "investing",
  title: "Investing",
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
      name: "plan",
      type: "string",
    },
    {
      name: "planType",
      type: "string",
    },
    {
      name: "avalibleAmount",
      type: "string",
    },
    {name: "user", title: "User", type: "reference", to: {type: "user"}},
  ],
}
