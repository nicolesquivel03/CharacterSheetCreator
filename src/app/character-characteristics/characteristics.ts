import { characteristicList } from '../player/player-characteristics'
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
        display: 'Brawn',   
        value: 0
    },
    {
        id: CharacteristicEnum.Agility,
        display: 'Agility',   
        value: 0
    },
    {
        id: CharacteristicEnum.Intellect,
        display: 'Intellect',   
        value: 0
    },
    {
        id: CharacteristicEnum.Cunning,
        display: 'Cunning',   
        value: 0
    },
    {
        id: CharacteristicEnum.Willpower,
        display: 'Willpower',   
        value: 0
    },
    {
        id: CharacteristicEnum.Presence,
        display: 'Presence',   
        value: 0
    }
]