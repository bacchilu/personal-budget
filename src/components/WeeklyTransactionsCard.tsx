import {Avatar, Box, Divider, Paper, Stack, Typography} from '@mui/material';
import Decimal from 'decimal.js';

import {categories} from '../data/categories';
import {transactions} from '../data/transactions';
import type {Category} from '../types/Category';
import type {Transaction} from '../types/Transaction';
import {formatEuro} from '../utils/formatEuro';
import {calculateTransactionsTotal} from '../utils/transactionCalculations';
import {cardStyle} from './cardStyle';

export const WeeklyTransactionsCard = function () {
    const total: Decimal = calculateTransactionsTotal(transactions);

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

            {transactions.map((transaction: Transaction, index: number) => {
                const category: Category | undefined = categories.find(
                    (category: Category) => category.id === transaction.categoryId
                );

                if (category === undefined) {
                    throw new Error(`Unknown transaction category: ${transaction.categoryId}`);
                }

                const TransactionIcon = category.icon;

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
                                    color: category.color,
                                    bgcolor: category.background
                                }}
                            >
                                <TransactionIcon sx={{fontSize: 21}} />
                            </Avatar>
                            <Box sx={{minWidth: 0, flexGrow: 1}}>
                                <Typography sx={{fontWeight: 650}} noWrap>
                                    {transaction.merchant}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" noWrap>
                                    {category.name} · {transaction.detail}
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
