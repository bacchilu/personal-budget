import {MoreHorizRounded} from '@mui/icons-material';
import {Box, Button, IconButton, LinearProgress, Paper, Stack, Typography} from '@mui/material';
import {endOfISOWeek, format} from 'date-fns';
import type Decimal from 'decimal.js';

import {categories} from '../data/categories';
import {startDate} from '../data/startDate';
import {transactions} from '../data/transactions';
import type {Category} from '../types/Category';
import type {Transaction} from '../types/Transaction';
import {formatEuro} from '../utils/formatEuro';
import {cardStyle} from './cardStyle';

interface Budget {
    category: Category;
    spent: Decimal;
}

const budgets: Budget[] = transactions.reduce((budgets: Budget[], transaction: Transaction) => {
    const category: Category | undefined = categories.find(
        (category: Category) => category.id === transaction.categoryId
    );

    if (category === undefined) throw new Error(`Unknown transaction category: ${transaction.categoryId}`);

    const budget: Budget | undefined = budgets.find((budget: Budget) => budget.category.id === transaction.categoryId);

    if (budget === undefined)
        budgets.push({
            category,
            spent: transaction.amount
        });
    else budget.spent = budget.spent.plus(transaction.amount);

    return budgets;
}, []);

export const WeeklyBudgetsCard = function () {
    const endDate: Date = endOfISOWeek(startDate);

    return (
        <Paper variant="outlined" sx={{...cardStyle, p: 3}}>
            <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'space-between', mb: 2.5}}>
                <Box>
                    <Typography variant="h6" component="h2" sx={{fontWeight: 750}}>
                        Weekly budgets
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Limits for {format(startDate, 'd')}–{format(endDate, 'd MMMM')}
                    </Typography>
                </Box>
                <IconButton aria-label="More budget options" size="small">
                    <MoreHorizRounded />
                </IconButton>
            </Stack>

            <Stack spacing={2.5}>
                {budgets.map((budget) => (
                    <Box key={budget.category.id}>
                        <Stack direction="row" sx={{justifyContent: 'space-between', mb: 0.75}}>
                            <Typography variant="body2" sx={{fontWeight: 650}}>
                                {budget.category.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formatEuro(budget.spent)} / {formatEuro(budget.category.total)}
                            </Typography>
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={budget.spent.dividedBy(budget.category.total).times(100).toNumber()}
                            sx={{
                                height: 7,
                                borderRadius: 20,
                                bgcolor: '#edf0f2',
                                '& .MuiLinearProgress-bar': {
                                    bgcolor: budget.category.color,
                                    borderRadius: 20
                                }
                            }}
                        />
                    </Box>
                ))}
            </Stack>
            <Button size="small" sx={{color: '#315e52', mt: 2.5, px: 0}}>
                Review all budgets
            </Button>
        </Paper>
    );
};
