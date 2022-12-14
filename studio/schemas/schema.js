// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
import tokenSale from "./token-sale"
import user from "./user"
import account from "./account"
import verificationToken from "./verification-token"
import refferal from "./refferal"
import investing from "./investing"
import withdrawalDetails from "./withdrawalDetails"
import WithdrawalAmount from "./WithdrawalAmount"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    tokenSale,
    user,
    account,
    verificationToken,
    refferal,
    investing,
    withdrawalDetails,
    WithdrawalAmount,
  ]),
})
