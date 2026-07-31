import {Container, Stack} from '@mui/material';
import type {PropsWithChildren} from 'react';

export const Page = function ({children}: PropsWithChildren) {
    return (
        <Container maxWidth="lg" sx={{py: {xs: 3, md: 5}}}>
            <Stack spacing={3}>{children}</Stack>
        </Container>
    );
};
