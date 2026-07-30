import Decimal from 'decimal.js';

import type {Transaction} from '../types/Transaction';
import {endDate, startDate} from './startDate';

const randomDateBetween = function (start: Date, end: Date): Date {
    const startTime: number = start.getTime();
    const endTime: number = end.getTime();
    const randomTime: number = Math.floor(Math.random() * (endTime - startTime + 1)) + startTime;

    return new Date(randomTime);
};

export const transactions: Transaction[] = [
    {
        merchant: 'Coop supermarket',
        date: randomDateBetween(startDate, endDate),
        amount: new Decimal('48.60'),
        categoryId: 'groceries'
    },
    {
        merchant: 'Netflix',
        date: randomDateBetween(startDate, endDate),
        amount: new Decimal('12.99'),
        categoryId: 'subscriptions'
    },
    {
        merchant: 'Sushi House',
        date: randomDateBetween(startDate, endDate),
        amount: new Decimal('34.00'),
        categoryId: 'dining_out'
    },
    {
        merchant: 'Metro ticket',
        date: randomDateBetween(startDate, endDate),
        amount: new Decimal('2.20'),
        categoryId: 'transport'
    }
];
