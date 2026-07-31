import {Typography} from '@mui/material';

import {WeeklyLimitCard} from '../components/WeeklyLimitCard';
import {Page} from './Page';

export const SettingsPage = function () {
    return (
        <Page>
            <Typography variant="h4" component="h1" sx={{fontWeight: 750, letterSpacing: '-0.03em'}}>
                Settings
            </Typography>
            <WeeklyLimitCard />
        </Page>
    );
};
