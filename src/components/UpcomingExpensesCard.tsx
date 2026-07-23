import {CalendarMonthRounded} from '@mui/icons-material';
import {Avatar, Box, Divider, Paper, Stack, Typography} from '@mui/material';
import Decimal from 'decimal.js';

import {formatEuro} from '../utils/formatEuro';
import {cardStyle} from './cardStyle';

export const UpcomingExpensesCard = function () {
    const internetBill: Decimal = new Decimal('29.90');
    const diningBudget: Decimal = new Decimal('60.00');
    const diningSpent: Decimal = new Decimal('34.00');

    return (
        <Paper variant="outlined" sx={{...cardStyle, p: 3}}>
            <Typography variant="h6" component="h2" sx={{fontWeight: 750, mb: 2}}>
                Coming up this week
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{alignItems: 'center'}}>
                <Avatar sx={{width: 42, height: 42, bgcolor: '#f2ebdd', color: '#80622b'}}>
                    <CalendarMonthRounded sx={{fontSize: 21}} />
                </Avatar>
                <Box sx={{flexGrow: 1}}>
                    <Typography sx={{fontWeight: 650}}>Internet bill</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Due Friday
                    </Typography>
                </Box>
                <Typography sx={{fontWeight: 750}}>{formatEuro(internetBill)}</Typography>
            </Stack>
            <Divider sx={{my: 2}} />
            <Typography variant="body2" sx={{color: '#9a5a21', fontWeight: 650}}>
                Dining out has {formatEuro(diningBudget.minus(diningSpent))} left for the rest of this week.
            </Typography>
        </Paper>
    );
};
