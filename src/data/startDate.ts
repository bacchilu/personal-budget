import {endOfISOWeek} from 'date-fns';

export const startDate: Date = new Date(2026, 6, 20);
export const endDate: Date = endOfISOWeek(startDate);
