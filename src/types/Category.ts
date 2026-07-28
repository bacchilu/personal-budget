import type {SvgIconComponent} from '@mui/icons-material';
import type Decimal from 'decimal.js';

export type CategoryId = 'groceries' | 'subscriptions' | 'dining_out' | 'transport';

export interface Category {
    id: CategoryId;
    name: string;
    icon: SvgIconComponent;
    color: string;
    background: string;
    total: Decimal;
}
