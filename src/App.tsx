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
import {Navigate, NavLink, Route, Routes} from 'react-router';

import {BudgetsPage} from './pages/BudgetsPage';
import {OverviewPage} from './pages/OverviewPage';
import {SettingsPage} from './pages/SettingsPage';
import {TransactionsPage} from './pages/TransactionsPage';

const navigationButtonStyle = {
    color: 'text.secondary',
    px: 2,
    '&.active': {
        color: '#254b41',
        bgcolor: '#eaf2ef'
    }
};

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
                                <Button component={NavLink} to="/overview" sx={navigationButtonStyle}>
                                    Overview
                                </Button>
                                <Button component={NavLink} to="/transactions" sx={navigationButtonStyle}>
                                    Transactions
                                </Button>
                                <Button component={NavLink} to="/budgets" sx={navigationButtonStyle}>
                                    Budgets
                                </Button>
                            </Stack>

                            <Box sx={{flexGrow: {xs: 1, md: 0}}} />
                            <IconButton aria-label="Notifications" sx={{color: 'text.secondary'}}>
                                <NotificationsNoneRounded />
                            </IconButton>
                            <IconButton
                                component={NavLink}
                                to="/settings"
                                aria-label="Settings"
                                sx={{
                                    color: 'text.secondary',
                                    '&.active': {color: '#254b41', bgcolor: '#eaf2ef'}
                                }}
                            >
                                <SettingsRounded />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>

                <Box component="main">
                    <Routes>
                        <Route path="/" element={<Navigate to="/overview" replace />} />
                        <Route path="/overview" element={<OverviewPage />} />
                        <Route path="/transactions" element={<TransactionsPage />} />
                        <Route path="/budgets" element={<BudgetsPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                        <Route path="*" element={<Navigate to="/overview" replace />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
};
