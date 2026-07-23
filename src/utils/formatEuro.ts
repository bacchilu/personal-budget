import type Decimal from 'decimal.js';

const euroFormatter = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR'});

export const formatEuro = function (amount: Decimal): string {
    return euroFormatter.format(amount.toNumber());
};
