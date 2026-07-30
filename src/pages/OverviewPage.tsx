import {Box, Container, Stack} from '@mui/material';

import {SpendingPaceCard} from '../components/SpendingPaceCard';
import {UpcomingExpensesCard} from '../components/UpcomingExpensesCard';
import {WeeklyBudgetCard} from '../components/WeeklyBudgetCard';
import {WeeklyBudgetsCard} from '../components/WeeklyBudgetsCard';
import {WeeklyHeader} from '../components/WeeklyHeader';
import {WeeklyTransactionsCard} from '../components/WeeklyTransactionsCard';

export const OverviewPage = function () {
    return (
        <Container maxWidth="lg" sx={{py: {xs: 3, md: 5}}}>
            <Stack spacing={3}>
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
            </Stack>
        </Container>
    );
};
