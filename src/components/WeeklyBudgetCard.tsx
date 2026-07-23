import {CalendarMonthRounded, ReceiptLongRounded, TrendingDownRounded} from '@mui/icons-material';
import {Box, Divider, Paper, Stack, Typography} from '@mui/material';
import Decimal from 'decimal.js';

import {formatEuro} from '../utils/formatEuro';
import {cardStyle} from './cardStyle';

export const WeeklyBudgetCard = function () {
    const weeklyLimit: Decimal = new Decimal('210.00');
    const spent: Decimal = new Decimal('97.79');

    return (
        <Paper
            variant="outlined"
            sx={{
                ...cardStyle,
                p: {xs: 3, md: 4},
                color: '#fff',
                bgcolor: '#254b41',
                borderColor: '#254b41',
                backgroundImage: 'radial-gradient(circle at 92% 18%, rgba(180, 221, 202, 0.22), transparent 28%)'
            }}
        >
            <Typography sx={{color: '#c8ddd6', fontWeight: 600}}>Left in this week's budget</Typography>
            <Typography variant="h2" component="p" sx={{fontWeight: 750, letterSpacing: '-0.04em', mt: 1, mb: 3}}>
                {formatEuro(weeklyLimit.minus(spent))}
            </Typography>

            <Divider sx={{borderColor: 'rgba(255,255,255,0.14)', mb: 2.5}} />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr 1fr', sm: 'repeat(3, 1fr)'},
                    gap: 2
                }}
            >
                <Box>
                    <Stack direction="row" spacing={0.75} sx={{alignItems: 'center', color: '#b9d3ca'}}>
                        <CalendarMonthRounded sx={{fontSize: 18}} />
                        <Typography variant="body2">Weekly limit</Typography>
                    </Stack>
                    <Typography sx={{fontWeight: 700, mt: 0.5}}>{formatEuro(weeklyLimit)}</Typography>
                </Box>
                <Box>
                    <Stack direction="row" spacing={0.75} sx={{alignItems: 'center', color: '#b9d3ca'}}>
                        <TrendingDownRounded sx={{fontSize: 18}} />
                        <Typography variant="body2">Spent</Typography>
                    </Stack>
                    <Typography sx={{fontWeight: 700, mt: 0.5}}>{formatEuro(spent)}</Typography>
                </Box>
                <Box sx={{gridColumn: {xs: '1 / -1', sm: 'auto'}}}>
                    <Stack direction="row" spacing={0.75} sx={{alignItems: 'center', color: '#b9d3ca'}}>
                        <ReceiptLongRounded sx={{fontSize: 18}} />
                        <Typography variant="body2">Transactions</Typography>
                    </Stack>
                    <Typography sx={{fontWeight: 700, mt: 0.5}}>4 this week</Typography>
                </Box>
            </Box>
        </Paper>
    );
};
