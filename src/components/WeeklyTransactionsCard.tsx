import {
    DirectionsBusRounded,
    RestaurantRounded,
    ShoppingBasketRounded,
    SubscriptionsRounded
} from '@mui/icons-material';
import {Avatar, Box, Divider, Paper, Stack, Typography} from '@mui/material';
import Decimal from 'decimal.js';

import {formatEuro} from '../utils/formatEuro';
import {cardStyle} from './cardStyle';

interface Transaction {
    merchant: string;
    detail: string;
    amount: Decimal;
    icon: typeof ShoppingBasketRounded;
    color: string;
    background: string;
}

const transactions: Transaction[] = [
    {
        merchant: 'Coop supermarket',
        detail: 'Groceries · Today, 10:42',
        amount: new Decimal('48.60'),
        icon: ShoppingBasketRounded,
        color: '#28694f',
        background: '#e5f4ec'
    },
    {
        merchant: 'Netflix',
        detail: 'Subscriptions · Yesterday, 22:01',
        amount: new Decimal('12.99'),
        icon: SubscriptionsRounded,
        color: '#8c3b4a',
        background: '#fae9ed'
    },
    {
        merchant: 'Sushi House',
        detail: 'Dining out · Monday, 19:36',
        amount: new Decimal('34.00'),
        icon: RestaurantRounded,
        color: '#8a5523',
        background: '#fbefdf'
    },
    {
        merchant: 'Metro ticket',
        detail: 'Transport · Monday, 08:12',
        amount: new Decimal('2.20'),
        icon: DirectionsBusRounded,
        color: '#64509c',
        background: '#eeeafd'
    }
];

export const WeeklyTransactionsCard = function () {
    const total: Decimal = transactions.reduce((sum, transaction) => sum.plus(transaction.amount), new Decimal(0));

    return (
        <Paper variant="outlined" sx={{...cardStyle, overflow: 'hidden'}}>
            <Box sx={{px: {xs: 2.5, sm: 3}, py: 2.5}}>
                <Typography variant="h6" component="h2" sx={{fontWeight: 750}}>
                    This week's transactions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Monday 20 – Sunday 26 July · {transactions.length} transactions · total {formatEuro(total)}
                </Typography>
            </Box>
            <Divider />

            {transactions.map((transaction, index) => {
                const TransactionIcon = transaction.icon;

                return (
                    <Box key={transaction.merchant}>
                        <Stack
                            direction="row"
                            spacing={1.5}
                            sx={{alignItems: 'center', px: {xs: 2.5, sm: 3}, py: 1.75}}
                        >
                            <Avatar
                                sx={{
                                    width: 42,
                                    height: 42,
                                    color: transaction.color,
                                    bgcolor: transaction.background
                                }}
                            >
                                <TransactionIcon sx={{fontSize: 21}} />
                            </Avatar>
                            <Box sx={{minWidth: 0, flexGrow: 1}}>
                                <Typography sx={{fontWeight: 650}} noWrap>
                                    {transaction.merchant}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {transaction.detail}
                                </Typography>
                            </Box>
                            <Typography sx={{fontWeight: 750, whiteSpace: 'nowrap', color: '#303744'}}>
                                {formatEuro(transaction.amount)}
                            </Typography>
                        </Stack>
                        {index < transactions.length - 1 && <Divider sx={{ml: {xs: 9, sm: 10.5}}} />}
                    </Box>
                );
            })}
        </Paper>
    );
};
