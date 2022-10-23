export let userQUERY = `*[_type == 'user' && _id == $userId] {_id,email,name,refBy}`
export let refferalQUERY = `*[_type=="refferal" && refferalUser._ref == $userId] {
      _id, ...
    }`
export let referralUsers = `*[_type== "user" && refBy == $refId] {_id,email,name,refBy}`
//`*[_type == 'refferal' && refferalUser._ref == $userId] {_id,...}_createdAt,name,email,refBy`

export let investingPlan = `*[_type=="investing"&& user._ref == $userId] | order(_createdAt) {
    _id,
    ...
  }`
