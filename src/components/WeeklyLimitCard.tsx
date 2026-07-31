import {CalendarMonthRounded} from '@mui/icons-material';
import {Stack, Typography} from '@mui/material';

import {useWeeklyLimit} from '../data/weeklyLimit';
import {formatEuro} from '../utils/formatEuro';
import {PrimaryPanel} from './Panel';

export const WeeklyLimitCard = function () {
    const {weeklyLimit} = useWeeklyLimit();

    if (weeklyLimit === undefined) return null;

    return (
        <PrimaryPanel>
            <Stack direction="row" spacing={0.75} sx={{alignItems: 'center', color: '#c8ddd6'}}>
                <CalendarMonthRounded sx={{fontSize: 20}} />
                <Typography sx={{fontWeight: 600}}>Weekly limit</Typography>
            </Stack>
            <Typography variant="h2" component="p" sx={{fontWeight: 750, letterSpacing: '-0.04em', mt: 1}}>
                {formatEuro(weeklyLimit)}
            </Typography>
        </PrimaryPanel>
    );
};
