import {Avatar, Box, Divider, Stack, Typography} from '@mui/material';
import {format} from 'date-fns';
import Decimal from 'decimal.js';

import {useCategories} from '../data/categories';
import {endDate, startDate} from '../data/startDate';
import {useTransactions} from '../data/transactions';
import type {Category} from '../types/Category';
import type {Transaction} from '../types/Transaction';
import {formatEuro} from '../utils/formatEuro';
import {calculateTransactionsTotal} from '../utils/transactionCalculations';
import {Panel} from './Panel';

export const WeeklyTransactionsCard = function () {
    const categories: Category[] = useCategories();
    const transactions: Transaction[] = useTransactions();
    const total: Decimal = calculateTransactionsTotal(transactions);

    return (
        <Panel sx={{overflow: 'hidden'}}>
            <Box sx={{px: {xs: 2.5, sm: 3}, py: 2.5}}>
                <Typography variant="h6" component="h2" sx={{fontWeight: 750}}>
                    This week's transactions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {format(startDate, 'EEEE d')} – {format(endDate, 'EEEE d MMMM')} · {transactions.length}{' '}
                    transactions · total {formatEuro(total)}
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
                                    {category.name} · {format(transaction.date, 'EEEE, HH:mm')}
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
        </Panel>
    );
};
