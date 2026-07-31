import {CalendarMonthRounded} from '@mui/icons-material';
import {Box, Button, InputAdornment, Stack, TextField, Typography} from '@mui/material';
import Decimal from 'decimal.js';
import React from 'react';

import {useWeeklyLimit} from '../data/weeklyLimit';
import {Panel} from './Panel';

const parseWeeklyLimit = function (input: string): Decimal | null {
    if (input.trim() === '') return null;

    try {
        const value: Decimal = new Decimal(input);

        if (!value.isFinite()) return null;
        if (value.isNegative()) return null;
        if (value.decimalPlaces() > 2) return null;

        return value;
    } catch {
        return null;
    }
};

const WeeklyLimitForm: React.FC<{weeklyLimit: Decimal}> = function ({weeklyLimit}) {
    const [weeklyLimitInput, setWeeklyLimitInput] = React.useState<string>(weeklyLimit.toFixed(2));
    const {setWeeklyLimit} = useWeeklyLimit();

    const validatedWeeklyLimit: Decimal | null = parseWeeklyLimit(weeklyLimitInput);

    const handleChange = function (event: React.ChangeEvent<HTMLInputElement>) {
        setWeeklyLimitInput(event.target.value);
    };

    const handleSubmit = function (event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        if (validatedWeeklyLimit === null) return;
        console.log(validatedWeeklyLimit);
        setWeeklyLimit(validatedWeeklyLimit);
    };

    return (
        <Panel sx={{p: {xs: 3, md: 4}}}>
            <Stack direction="row" spacing={0.75} sx={{alignItems: 'center', color: 'text.secondary'}}>
                <CalendarMonthRounded sx={{fontSize: 20}} />
                <Typography sx={{fontWeight: 600}}>Weekly limit</Typography>
            </Stack>
            <Box component="form" onSubmit={handleSubmit} sx={{mt: 2}}>
                <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} sx={{alignItems: {sm: 'center'}}}>
                    <TextField
                        fullWidth
                        label="Amount"
                        name="weeklyLimit"
                        required
                        type="number"
                        value={weeklyLimitInput}
                        onChange={handleChange}
                        slotProps={{
                            htmlInput: {min: 0, step: '0.01'},
                            input: {endAdornment: <InputAdornment position="end">€</InputAdornment>}
                        }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disabled={validatedWeeklyLimit === null}
                        sx={{alignSelf: {xs: 'stretch', sm: 'auto'}}}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Panel>
    );
};

export const WeeklyLimitCard = function () {
    const {weeklyLimit} = useWeeklyLimit();

    if (weeklyLimit === undefined) return null;
    return <WeeklyLimitForm weeklyLimit={weeklyLimit} />;
};
