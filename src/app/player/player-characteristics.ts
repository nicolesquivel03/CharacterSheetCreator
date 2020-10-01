import { CharacteristicEnum, StatEnum } from "../character-characteristics/characteristics";

export interface PlayerCharacteristic {
    id: CharacteristicEnum;
    value: number;
}

export interface PlayerStat {
    id: StatEnum;
    thresholdValue?: number;
    currentValue?: number;
    value?: number;
    rangedValue?: number;
    meleeValue?: number;
}