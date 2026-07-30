import Decimal from 'decimal.js';

import type {Transaction} from '../types/Transaction';

export const transactions: Transaction[] = [
    {
        merchant: 'Coop supermarket',
        date: new Date('2026-07-24T10:42:00'),
        amount: new Decimal('48.60'),
        categoryId: 'groceries'
    },
    {
        merchant: 'Netflix',
        date: new Date('2026-07-23T22:01:00'),
        amount: new Decimal('12.99'),
        categoryId: 'subscriptions'
    },
    {
        merchant: 'Sushi House',
        date: new Date('2026-07-21T19:36:00'),
        amount: new Decimal('34.00'),
        categoryId: 'dining_out'
    },
    {
        merchant: 'Metro ticket',
        date: new Date('2026-07-20T08:12:00'),
        amount: new Decimal('2.20'),
        categoryId: 'transport'
    }
];
