import Decimal from 'decimal.js';

const weeklyLimit: Decimal = new Decimal('210.00');

export const useWeeklyLimit = function (): Decimal {
    return weeklyLimit;
};
