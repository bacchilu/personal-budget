import {Box, Chip, LinearProgress, Paper, Stack, Typography} from '@mui/material';

import {cardStyle} from './cardStyle';

export const SpendingPaceCard = function () {
    return (
        <Paper variant="outlined" sx={{...cardStyle, p: {xs: 3, md: 4}}}>
            <Typography variant="overline" sx={{color: 'text.secondary', fontWeight: 700, letterSpacing: 1}}>
                Spending pace
            </Typography>
            <Stack direction="row" sx={{alignItems: 'flex-end', justifyContent: 'space-between', mt: 1}}>
                <Box>
                    <Typography variant="h4" sx={{fontWeight: 750}}>
                        24%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        of your weekly plan
                    </Typography>
                </Box>
                <Chip label="Under plan" size="small" sx={{bgcolor: '#e5f4ec', color: '#28694f', fontWeight: 700}} />
            </Stack>
            <LinearProgress
                variant="determinate"
                value={24}
                sx={{
                    height: 9,
                    borderRadius: 20,
                    mt: 2.5,
                    mb: 2.5,
                    bgcolor: '#edf0f2',
                    '& .MuiLinearProgress-bar': {bgcolor: '#4d8b75', borderRadius: 20}
                }}
            />
            <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <Box>
                    <Typography variant="caption" color="text.secondary">
                        Daily allowance
                    </Typography>
                    <Typography sx={{fontWeight: 700}}>75,55 €</Typography>
                </Box>
                <Box sx={{textAlign: 'right'}}>
                    <Typography variant="caption" color="text.secondary">
                        Weekly spending plan
                    </Typography>
                    <Typography sx={{fontWeight: 700}}>400,00 €</Typography>
                </Box>
            </Stack>
        </Paper>
    );
};
