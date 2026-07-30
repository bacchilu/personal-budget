import {differenceInCalendarDays, endOfISOWeek, startOfISOWeek} from 'date-fns';

export const startDate: Date = startOfISOWeek(new Date());
export const endDate: Date = endOfISOWeek(startDate);

export const calculateRemainingDays = function (): number {
    return Math.max(differenceInCalendarDays(endDate, new Date()), 0) + 1;
};
