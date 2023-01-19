import classNames from 'classnames';
import React from 'react';

import './style.scss';

export const InvoiceStatus: React.FC<Props> = ({ status }) => {
  return (
    <div
      className={classNames(
        'invoice-status',
        `invoice-status--${status}`,
        'flex-center',
        'rounded--large'
      )}
    >
      <span className="invoice-status__dot"></span>
      <span>{status}</span>
    </div>
  );
};

interface Props {
  status: Entities.Invoice.TStatus;
}
