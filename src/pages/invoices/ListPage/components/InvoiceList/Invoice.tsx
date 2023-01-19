import React from 'react';

import { ReactComponent as ArrowRightIcon } from '@/assets/images/icon-arrow-right.svg';
import InvoiceStatus from '@/components/InvoiceStatus';

import { useIsMobile } from '@/hooks/mediaQueries';

import { formatCurrency } from '@/utils/numbers';

import './invoice.style.scss';

const Invoice: React.FC<Entities.Invoice.EInvoice> = ({ ...invoice }) => {
  const isMoble = useIsMobile();

  const dueDate = `Due ${new Date(invoice.date).toLocaleDateString()}`;
  const formattedAmount = formatCurrency({
    currency: 'USD',
    value: invoice.total,
  });

  if (isMoble) {
    return (
      <div className="invoice invoice--mobile">
        <div className="flex-center-between">
          <p className="invoice__no">
            <span className="invoice__no-prefix">#</span>
            <span className="invoice__no">{invoice.no}</span>
          </p>
          <p className="invoice__client-name">{invoice.billTo.client.name}</p>
        </div>
        <div className="flex-center-between">
          <p className="invoice__info">
            <span className="invoice__info-date">
              Due {new Date(invoice.date).toLocaleDateString()}
            </span>
            <span className="invoice__info-amount fw-bold">
              {formattedAmount}
            </span>
          </p>
          <InvoiceStatus status={invoice.status} />
        </div>
      </div>
    );
  }

  return (
    <div className="invoice invoice--tablet flex-center-between">
      <p className="invoice__no">
        <span className="invoice__no-prefix">#</span>
        <span className="invoice__no">{invoice.no}</span>
      </p>
      <span className="invoice__info-date">{dueDate}</span>
      <span className="invoice__client-name">{invoice.billTo.client.name}</span>
      <span className="invoice__info-amount">{formattedAmount}</span>
      <p className='invoice__status flex-center-between'>
        <InvoiceStatus status={invoice.status} />
        <ArrowRightIcon />
      </p>
    </div>
  );
};

export default Invoice;
