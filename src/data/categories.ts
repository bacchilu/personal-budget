import {
    DirectionsBusRounded,
    RestaurantRounded,
    ShoppingBasketRounded,
    SubscriptionsRounded
} from '@mui/icons-material';
import Decimal from 'decimal.js';

import type {Category} from '../types/Category';

const categories: Category[] = [
    {
        id: 'groceries',
        name: 'Groceries',
        icon: ShoppingBasketRounded,
        color: '#28694f',
        background: '#e5f4ec',
        total: new Decimal('100.00')
    },
    {
        id: 'subscriptions',
        name: 'Subscriptions',
        icon: SubscriptionsRounded,
        color: '#8c3b4a',
        background: '#fae9ed',
        total: new Decimal('20.00')
    },
    {
        id: 'dining_out',
        name: 'Dining out',
        icon: RestaurantRounded,
        color: '#8a5523',
        background: '#fbefdf',
        total: new Decimal('60.00')
    },
    {
        id: 'transport',
        name: 'Transport',
        icon: DirectionsBusRounded,
        color: '#64509c',
        background: '#eeeafd',
        total: new Decimal('30.00')
    }
];

export const useCategories = function (): Category[] {
    return categories;
};
