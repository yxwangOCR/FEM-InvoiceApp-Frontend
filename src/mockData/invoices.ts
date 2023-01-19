export const invoices: Entities.Invoice.EInvoice[] = [
  {
    no: 'RT3080',
    date: '2023-01-18T21:08:35.955Z',
    billFrom: {
      street: 'Plymouth S',
      country: 'U.S',
      postCode: '14608',
      city: 'Rochester, NY',
    },
    billTo: {
      address: {
        street: 'Plymouth S',
        country: 'U.S',
        postCode: '14608',
        city: 'Rochester, NY',
      },
      client: {
        email: 'hwll@gmail.com',
        name: 'Smith',
      },
    },
    description: 'Fake Data',
    items: [
      {
        name: 'Beer',
        quantity: 10,
        price: 12.58,
      },
    ],
    paymentTerms: '20days',
    status: 'draft',
    total: 2888,
  },
  {
    no: 'RT3082',
    date: '2023-01-18T21:08:35.955Z',
    billFrom: {
      street: 'Plymouth S',
      country: 'U.S',
      postCode: '14608',
      city: 'Rochester, NY',
    },
    billTo: {
      address: {
        street: 'Plymouth S',
        country: 'U.S',
        postCode: '14608',
        city: 'Rochester, NY',
      },
      client: {
        email: 'hwll@gmail.com',
        name: 'Smith',
      },
    },
    description: 'Fake Data',
    items: [
      {
        name: 'Beer',
        quantity: 10,
        price: 12.58,
      },
    ],
    paymentTerms: '20days',
    status: 'pending',
    total: 0,
  },
  {
    no: 'RT3084',
    date: '2023-01-18T21:08:35.955Z',
    billFrom: {
      street: 'Plymouth S',
      country: 'U.S',
      postCode: '14608',
      city: 'Rochester, NY',
    },
    billTo: {
      address: {
        street: 'Plymouth S',
        country: 'U.S',
        postCode: '14608',
        city: 'Rochester, NY',
      },
      client: {
        email: 'hwll@gmail.com',
        name: 'Smith',
      },
    },
    description: 'Fake Data',
    items: [
      {
        name: 'Beer',
        quantity: 10,
        price: 12.58,
      },
    ],
    paymentTerms: '20days',
    status: 'paid',
    total: 0,
  },
];
