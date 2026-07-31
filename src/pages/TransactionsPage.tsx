import {Typography} from '@mui/material';

import {Page} from './Page';

export const TransactionsPage = function () {
    return (
        <Page>
            <Typography variant="h4" component="h1" sx={{fontWeight: 750, letterSpacing: '-0.03em'}}>
                Transactions
            </Typography>
        </Page>
    );
};
