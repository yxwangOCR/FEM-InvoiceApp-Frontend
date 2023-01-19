export const formatCurrency = (args: { currency: string; value: number }) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: args.currency,
  }).format(args.value);
};
