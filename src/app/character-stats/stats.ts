import { Stat } from "./stat"

export enum StatEnum {
    Soak,
    Wounds,
    Strain,
    Defense
}

export const Stats: Stat[] = [
    {
        id: StatEnum.Soak,
        display: 'Soak Value',
        hasMultipleValues: false
    },
    {
        id: StatEnum.Wounds,
        display: 'Wounds',
        hasMultipleValues: true,
        value1_name: 'Threshold', 
        value2_name: 'Current'  
    },
    {
        id: StatEnum.Strain,
        display: 'Strain', 
        hasMultipleValues: true,
        value1_name: 'Threshold', 
        value2_name: 'Current' 
    },
    {
        id: StatEnum.Defense,
        display: 'Defense',
        hasMultipleValues: true,
        value1_name: 'Range', 
        value2_name: 'Melee'
    }
]