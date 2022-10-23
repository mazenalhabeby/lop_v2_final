export default {
  title: "Withdrawal Amount",
  name: "WithdrawalAmount",
  type: "object",
  fields: [
    {name: "amount", type: "string", title: "Amount"},
    {name: "itemCount", type: "number", title: "Item Count"},
    {name: "status", type: "number", title: "Withdrawal Status"},
    {name: "transactionLink", type: "string", title: "Transaction Link"},
    {name: "withdrawalTime", type: "number", title: "Withdrawal Time"},
  ],
}
