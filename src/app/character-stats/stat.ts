import { StatEnum } from './stats';

export interface Stat {
    id: StatEnum;
    display: string;
    value1_name?: string;
    value2_name?: string;
    hasMultipleValues: boolean;
}

export interface StatBlock {
    playerStatBlock: Map <StatEnum, Stat>;
}