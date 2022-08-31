export let userQUERY = `*[_type == 'user' && _id == $userId] {_id,email,name,refBy}`
export let refferalQUERY = `*[_type == 'refferal' && refferalUser._ref == $userId] {_id,...}`
