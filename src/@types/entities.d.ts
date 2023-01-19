declare namespace Entities {
  interface ERecord {
    createdAt: string;
    id: string;
    updatedAt: string;
  }

  export interface TAddress {
    city: string;
    country: string;
    postCode: string;
    street: string;
  }

  export interface TItem {
    name: string;
    price: number;
    quantity: number;
  }

  declare namespace Invoice {
    export type TStatus =
      | 'draft'
      | 'paid'
      | 'pending';

    export interface EInvoice {
      billFrom: TAddress;
      billTo: {
        address: TAddress;
        client: {
          email: string;
          name: string;
        };
      };
      date: string;
      description: string;
      items: TItem[];
      no: string;
      paymentTerms: string;
      status: TStatus;
      total: number;
    }
  }
}
