import { CharacteristicEnum } from "../character-characteristics/characteristics";

export interface PlayerCharacteristic {
    id: CharacteristicEnum;
    value: number;
}

export const characteristicList: Map<CharacteristicEnum, PlayerCharacteristic> = new Map([
    [
        CharacteristicEnum.Brawn, {
        id: CharacteristicEnum.Brawn,
        value: 0
        }
    ], [
        CharacteristicEnum.Agility, {
        id: CharacteristicEnum.Agility,
        value: 0
        }
    ], [
        CharacteristicEnum.Intellect, {
        id: CharacteristicEnum.Intellect,
        value: 0
        }
    ], [
        CharacteristicEnum.Cunning, {
        id: CharacteristicEnum.Cunning,
        value: 0
        }
    ], [
        CharacteristicEnum.Willpower, {
        id: CharacteristicEnum.Willpower,
        value: 0
        }
    ], [
        CharacteristicEnum.Presence, {
        id: CharacteristicEnum.Presence,
        value: 0
        }
    ]
])
