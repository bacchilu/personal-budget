import {Box, Stack} from '@mui/material';

import {SpendingPaceCard} from '../components/SpendingPaceCard';
import {UpcomingExpensesCard} from '../components/UpcomingExpensesCard';
import {WeeklyBudgetCard} from '../components/WeeklyBudgetCard';
import {WeeklyBudgetsCard} from '../components/WeeklyBudgetsCard';
import {WeeklyHeader} from '../components/WeeklyHeader';
import {WeeklyTransactionsCard} from '../components/WeeklyTransactionsCard';
import {Page} from './Page';

export const OverviewPage = function () {
    return (
        <Page>
            <WeeklyHeader />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: 'minmax(0, 1.7fr) minmax(280px, 1fr)'},
                    gap: 3
                }}
            >
                <WeeklyBudgetCard />
                <SpendingPaceCard />
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', md: 'minmax(0, 1.7fr) minmax(280px, 1fr)'},
                    gap: 3,
                    alignItems: 'start'
                }}
            >
                <WeeklyTransactionsCard />

                <Stack spacing={3}>
                    <WeeklyBudgetsCard />
                    <UpcomingExpensesCard />
                </Stack>
            </Box>
        </Page>
    );
};
