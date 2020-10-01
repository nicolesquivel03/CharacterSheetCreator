export interface Characteristic {
    id: number;         
    display: string;    // Name of Characteristic that player can see
}

export enum CharacteristicEnum {
    Brawn,
    Agility,
    Intellect,
    Cunning,
    Willpower,
    Presence
}

export interface Stat {
    id: number;
    display: string;
}

export enum StatEnum {
    Soak,
    Wounds,
    Strain,
    Defense
}

export const Stats: Stat[] = [
    {
        id: StatEnum.Soak,
        display: 'Soak Value'    
    },
    {
        id: StatEnum.Wounds,
        display: 'Wounds',  
    },
    {
        id: StatEnum.Strain,
        display: 'Strain'  
    },
    {
        id: StatEnum.Defense,
        display: 'Defense' 
    }
]

export const Characteristics: Characteristic[] = [
    {
        id: CharacteristicEnum.Brawn,
        display: 'Brawn'   
    },
    {
        id: CharacteristicEnum.Agility,
        display: 'Agility'
    },
    {
        id: CharacteristicEnum.Intellect,
        display: 'Intellect'
    },
    {
        id: CharacteristicEnum.Cunning,
        display: 'Cunning'
    },
    {
        id: CharacteristicEnum.Willpower,
        display: 'Willpower'
    },
    {
        id: CharacteristicEnum.Presence,
        display: 'Presence'
    },

]