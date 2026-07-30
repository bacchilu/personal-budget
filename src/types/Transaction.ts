import type Decimal from 'decimal.js';

import type {CategoryId} from './Category';

export interface Transaction {
    merchant: string;
    date: Date;
    amount: Decimal;
    categoryId: CategoryId;
}
