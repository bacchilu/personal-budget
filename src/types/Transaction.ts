import type Decimal from 'decimal.js';

import type {CategoryId} from './Category';

export interface Transaction {
    merchant: string;
    detail: string;
    amount: Decimal;
    categoryId: CategoryId;
}
