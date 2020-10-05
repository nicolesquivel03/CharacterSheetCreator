import { StatEnum } from "../character-stats/stats";
export interface PlayerStat {
    id: StatEnum;
    value1: number;
    value2?: number;
}

export const statsList: Map<StatEnum, PlayerStat> = new Map([
    [
        StatEnum.Soak, {
            id: StatEnum.Soak,
            value1: 0   // Soak Value
        }
    ],
    [
        StatEnum.Wounds, {
            id: StatEnum.Wounds,
            value1: 0,  // Wound Threshold Value
            value2: 0   // Wound Current Value
        }
    ],
    [
        StatEnum.Strain, {
            id: StatEnum.Strain,
            value1: 0,  // Strain Threshold Value
            value2: 0   // Strain Current Value
        }
    ],
    [
        StatEnum.Defense, {
            id: StatEnum.Defense,
            value1: 0,  // Defense Range Value
            value2: 0   // Defense Melee Value
        }
    ]
])