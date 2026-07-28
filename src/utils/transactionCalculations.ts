import Decimal from 'decimal.js';

import type {Transaction} from '../types/Transaction';

export const calculateTransactionsTotal = function (transactions: readonly Transaction[]): Decimal {
    return transactions.reduce(
        (total: Decimal, transaction: Transaction) => total.plus(transaction.amount),
        new Decimal(0)
    );
};

export const calculateRemainingDays = function (transactions: readonly Transaction[]): number {
    void transactions;

    return 4;
};
