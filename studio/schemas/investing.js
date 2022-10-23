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
      name: "planPeriod",
      type: "number",
    },
    {
      name: "py",
      type: "string",
    },
    {
      name: "withdrawalPeriod",
      type: "string",
    },
    {
      name: "planType",
      type: "string",
    },
    {name: "avalibleAmount", type: "number"},
    {name: "withdrawalAmount", type: "number"},
    {
      title: "Withdrawals Amount Details",
      name: "withdrawalsAmountDetails",
      type: "array",
      of: [{title: "Withdrawal Details Amount", type: "WithdrawalAmount"}],
    },
    {
      title: "Pofit",
      name: "withdrawal",
      type: "array",
      of: [{title: "Withdrawal", type: "withdrawalDetails"}],
    },
    {name: "user", title: "User", type: "reference", to: {type: "user"}},
  ],
  initialValue: {
    avalibleAmount: 0,
    withdrawalAmount: 0,
  },
}
