import {AddRounded, CalendarMonthRounded} from '@mui/icons-material';
import {Box, Button, Chip, Stack, Typography} from '@mui/material';
import {differenceInCalendarDays, endOfISOWeek, format, getISOWeek} from 'date-fns';

import {startDate} from '../data/startDate';

export const WeeklyHeader = function () {
    const endDate: Date = endOfISOWeek(startDate);
    const weekNumber: number = getISOWeek(startDate);
    const remainingDays: number = differenceInCalendarDays(endDate, startDate);

    return (
        <Stack
            direction={{xs: 'column', sm: 'row'}}
            spacing={2}
            sx={{alignItems: {xs: 'stretch', sm: 'center'}, justifyContent: 'space-between'}}
        >
            <Box>
                <Stack direction="row" spacing={1} sx={{alignItems: 'center', mb: 0.75}}>
                    <Typography variant="h4" component="h1" sx={{fontWeight: 750, letterSpacing: '-0.03em'}}>
                        This week
                    </Typography>
                    <Chip label="Mock data" size="small" sx={{bgcolor: '#eceef2', color: '#646b78', fontWeight: 600}} />
                </Stack>
                <Typography color="text.secondary">
                    Week {weekNumber} · {format(startDate, 'd')}–{format(endDate, 'd MMMM')} · {remainingDays} days left
                </Typography>
            </Box>

            <Stack direction="row" spacing={1.25}>
                <Button
                    variant="outlined"
                    startIcon={<CalendarMonthRounded />}
                    sx={{borderColor: '#d8dce3', color: '#3b4351', bgcolor: '#fff'}}
                >
                    {format(startDate, 'd')}–{format(endDate, 'd MMM')}
                </Button>
                <Button
                    variant="contained"
                    startIcon={<AddRounded />}
                    sx={{bgcolor: '#315e52', boxShadow: 'none', '&:hover': {bgcolor: '#315e52'}}}
                >
                    Add transaction
                </Button>
            </Stack>
        </Stack>
    );
};
