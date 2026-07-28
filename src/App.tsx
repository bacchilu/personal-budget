import {AccountBalanceWalletRounded, NotificationsNoneRounded, SettingsRounded} from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    IconButton,
    Stack,
    Toolbar,
    Typography
} from '@mui/material';

import {SpendingPaceCard} from './components/SpendingPaceCard';
import {UpcomingExpensesCard} from './components/UpcomingExpensesCard';
import {WeeklyBudgetCard} from './components/WeeklyBudgetCard';
import {WeeklyBudgetsCard} from './components/WeeklyBudgetsCard';
import {WeeklyHeader} from './components/WeeklyHeader';
import {WeeklyTransactionsCard} from './components/WeeklyTransactionsCard';

export const App = function () {
    return (
        <>
            <CssBaseline />

            <Box sx={{minHeight: '100vh', bgcolor: '#f6f7f9', color: '#18202f'}}>
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{bgcolor: 'rgba(255,255,255,0.95)', color: '#18202f', borderBottom: '1px solid #e7e9ee'}}
                >
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{minHeight: {xs: 64, sm: 72}, gap: 1.5}}>
                            <Avatar sx={{width: 36, height: 36, bgcolor: '#315e52'}}>
                                <AccountBalanceWalletRounded sx={{fontSize: 20}} />
                            </Avatar>
                            <Typography variant="h6" component="div" sx={{fontWeight: 750, letterSpacing: '-0.02em'}}>
                                Personal Budget
                            </Typography>

                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{ml: 4, display: {xs: 'none', md: 'flex'}, flexGrow: 1}}
                            >
                                <Button sx={{color: '#254b41', bgcolor: '#eaf2ef', px: 2}}>Overview</Button>
                                <Button sx={{color: 'text.secondary', px: 2}}>Transactions</Button>
                                <Button sx={{color: 'text.secondary', px: 2}}>Budgets</Button>
                            </Stack>

                            <Box sx={{flexGrow: {xs: 1, md: 0}}} />
                            <IconButton aria-label="Notifications" sx={{color: 'text.secondary'}}>
                                <NotificationsNoneRounded />
                            </IconButton>
                            <IconButton aria-label="Settings" sx={{color: 'text.secondary'}}>
                                <SettingsRounded />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>

                <Box component="main">
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
                </Box>
            </Box>
        </>
    );
};
