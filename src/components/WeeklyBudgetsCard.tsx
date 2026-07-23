import {MoreHorizRounded} from '@mui/icons-material';
import {Box, Button, IconButton, LinearProgress, Paper, Stack, Typography} from '@mui/material';

import {cardStyle} from './cardStyle';

const budgets = [
    {name: 'Groceries', spent: '48,60 €', total: '100 €', value: 49, color: '#3d8064'},
    {name: 'Dining out', spent: '34 €', total: '60 €', value: 57, color: '#cf7a31'},
    {name: 'Transport', spent: '2,20 €', total: '30 €', value: 7, color: '#6e62aa'}
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
                                {budget.spent} / {budget.total}
                            </Typography>
                        </Stack>
                        <LinearProgress
                            variant="determinate"
                            value={budget.value}
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
