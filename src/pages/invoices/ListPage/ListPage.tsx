import React from 'react';

import InvoiceList from './components/InvoiceList';

import { invoices } from '@/mockData/invoices';

import './style.scss';

export const ListPage: React.FC<Props> = () => (
  <div className="list-page">
    <InvoiceList invoices={[...invoices]} />
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props { }
