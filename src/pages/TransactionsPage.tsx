import {Container, Typography} from '@mui/material';

export const TransactionsPage = function () {
    return (
        <Container maxWidth="lg" sx={{py: {xs: 3, md: 5}}}>
            <Typography variant="h4" component="h1" sx={{fontWeight: 750, letterSpacing: '-0.03em'}}>
                Transactions
            </Typography>
        </Container>
    );
};
