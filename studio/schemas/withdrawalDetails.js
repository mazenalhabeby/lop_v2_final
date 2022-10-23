export default {
  title: "Withdrawal Details",
  name: "withdrawalDetails",
  type: "object",
  fields: [
    {name: "itemCount", type: "number", title: "Item Count"},
    {name: "py", type: "string", title: "Percentage Yield"},
    {name: "amount", type: "string", title: "Amount"},
    {name: "pyProfit", type: "number", title: "Percentage Yield Profit"},
    {
      name: "pyProfitByPeriod",
      type: "number",
      title: "Percentage Yield Profit By Period",
    },
    {name: "withdrawalAppear", type: "boolean", title: "Withdrawal Appear"},
    {name: "withdrawalTime", type: "number", title: "Withdrawal Time"},
  ],
}
