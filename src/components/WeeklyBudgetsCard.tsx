import {MoreHorizRounded} from '@mui/icons-material';
import {Box, Button, IconButton, LinearProgress, Paper, Stack, Typography} from '@mui/material';
import Decimal from 'decimal.js';

import {formatEuro} from '../utils/formatEuro';
import {cardStyle} from './cardStyle';

const budgets = [
    {name: 'Groceries', spent: new Decimal('48.60'), total: new Decimal('100.00'), color: '#3d8064'},
    {name: 'Dining out', spent: new Decimal('34.00'), total: new Decimal('60.00'), color: '#cf7a31'},
    {name: 'Transport', spent: new Decimal('2.20'), total: new Decimal('30.00'), color: '#6e62aa'}
];

export const WeeklyBudgetsCard = function () {
    return (
        <Paper variant="outlined" sx={{...cardStyle, p: 3}}>
            <Stack direction="row" sx={{alignItems: 'center', justifyContent: 'space-between', mb: 2.5}}>
                <Box>
                    <Typography variant="h6" component="h2" sx={{fontWeight: 750}}>
                        Weekly budgets
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Limits for 20–26 July
                    </Typography>
                </Box>
                <IconButton aria-label="More budget options" size="small">
                    <MoreHorizRounded />
                </IconButton>
            </Stack>

            <Stack spacing={2.5}>
                {budgets.map((budget) => (
                    <Box key={budget.name}>
                        <Stack direction="row" sx={{justifyContent: 'space-between', mb: 0.75}}>
                            <Typography variant="body2" sx={{fontWeight: 650}}>
                                {budget.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formatEuro(budget.spent)} / {formatEuro(budget.total)}
                            </Typography>
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={budget.spent.dividedBy(budget.total).times(100).toNumber()}
                            sx={{
                                height: 7,
                                borderRadius: 20,
                                bgcolor: '#edf0f2',
                                '& .MuiLinearProgress-bar': {
                                    bgcolor: budget.color,
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
