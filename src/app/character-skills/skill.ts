import { CharacteristicEnum } from "../character-characteristics/characteristics";
import { SettingEnum } from "../game-configuration/settings";
import { SkillsEnum } from './skills';

export interface Skill {
    id: SkillsEnum;
    display: string;
    setting: SettingEnum[];
    associatedCharacteristic: CharacteristicEnum;
}