import { Characteristic } from "./characteristic"

export enum CharacteristicEnum {
    Brawn,
    Agility,
    Intellect,
    Cunning,
    Willpower,
    Presence
}

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