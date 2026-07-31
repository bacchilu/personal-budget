import Decimal from 'decimal.js';
import useSWR from 'swr';

const weeklyLimit: Decimal = new Decimal('210.00');

const fetcher = async function (): Promise<Decimal> {
    return weeklyLimit;
};

interface WeeklyLimitResult {
    weeklyLimit: Decimal | undefined;
    setWeeklyLimit: (value: Decimal) => Promise<void>;
}

export const useWeeklyLimit = function (): WeeklyLimitResult {
    const {data, mutate} = useSWR<Decimal>('WEEKLY_LIMIT', fetcher, {fallbackData: weeklyLimit});

    const setWeeklyLimit = async function (value: Decimal): Promise<void> {
        await mutate(value, {revalidate: false});
    };

    return {weeklyLimit: data, setWeeklyLimit};
};
