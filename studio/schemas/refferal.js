export default {
  name: 'refferal',
  title: 'Refferal',
  type: 'document',
  fields: [
    {
      name: 'refferalUser',
      title: 'Refferal User',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'refferalId',
      title: 'Refferal Id',
      type: 'string',
    },
    {
      name: 'refferalRoul',
      title: 'Refferal Roul',
      type: 'string',
    },
  ],
}
