import { CharacteristicEnum } from "../character-characteristics/characteristics";
import { SettingEnum } from "../game-configuration/settings";

export interface Skill {
    id: number;
    display: string;
    setting: SettingEnum[];
    characteristic: CharacteristicEnum;
}