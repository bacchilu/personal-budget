import {
    AccountBalanceWalletRounded,
    AddRounded,
    CalendarMonthRounded,
    NotificationsNoneRounded,
    SettingsRounded
} from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Chip,
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
                            <Stack
                                direction={{xs: 'column', sm: 'row'}}
                                spacing={2}
                                sx={{alignItems: {xs: 'stretch', sm: 'center'}, justifyContent: 'space-between'}}
                            >
                                <Box>
                                    <Stack direction="row" spacing={1} sx={{alignItems: 'center', mb: 0.75}}>
                                        <Typography
                                            variant="h4"
                                            component="h1"
                                            sx={{fontWeight: 750, letterSpacing: '-0.03em'}}
                                        >
                                            This week
                                        </Typography>
                                        <Chip
                                            label="Mock data"
                                            size="small"
                                            sx={{bgcolor: '#eceef2', color: '#646b78', fontWeight: 600}}
                                        />
                                    </Stack>
                                    <Typography color="text.secondary">Week 30 · 20–26 July · 4 days left</Typography>
                                </Box>

                                <Stack direction="row" spacing={1.25}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<CalendarMonthRounded />}
                                        sx={{borderColor: '#d8dce3', color: '#3b4351', bgcolor: '#fff'}}
                                    >
                                        20–26 Jul
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
