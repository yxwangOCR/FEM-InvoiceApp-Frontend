import React from 'react';
import { Link } from 'react-router-dom';

import Invoice from './Invoice';

import NoData from '@/pages/invoices/ListPage/components/NoData';

import './invoiceList.style.scss';

export const InvoiceList: React.FC<Props> = ({ invoices }) => (
  <div className="invoice-list">
    {invoices.length
      ? (
        <ul>
          {invoices.map((item) => (
            <li className="invoice-list__item"
              key={item.no}>
              <Link
                className="invoice-list__to-detail content-block"
                to={`/invoices/${item.no}`}
              >
                <Invoice {...item} />
              </Link>
            </li>
          ))}
        </ul>
      )
      : (<NoData />)
    }
  </div>
);

interface Props {
  invoices: Entities.Invoice.EInvoice[];
}
