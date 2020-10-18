import { CharacteristicEnum } from './characteristics';

export interface Characteristic {
    id: CharacteristicEnum;         
    display: string;    // Name of Characteristic that player can see
    value: number;
}