import { PlayerCharacteristic } from "./player-characteristics";

export interface PlayerSkill {
    investedPointValue: number;
    isCareerSkill: boolean;
    characteristic: PlayerCharacteristic;
}