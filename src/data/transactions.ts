import Decimal from 'decimal.js';

import type {Transaction} from '../types/Transaction';

export const transactions: Transaction[] = [
    {
        merchant: 'Coop supermarket',
        detail: 'Today, 10:42',
        amount: new Decimal('48.60'),
        categoryId: 'groceries'
    },
    {
        merchant: 'Netflix',
        detail: 'Yesterday, 22:01',
        amount: new Decimal('12.99'),
        categoryId: 'subscriptions'
    },
    {
        merchant: 'Sushi House',
        detail: 'Monday, 19:36',
        amount: new Decimal('34.00'),
        categoryId: 'dining_out'
    },
    {
        merchant: 'Metro ticket',
        detail: 'Monday, 08:12',
        amount: new Decimal('2.20'),
        categoryId: 'transport'
    }
];
