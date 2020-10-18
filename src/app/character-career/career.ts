import { Skill } from "../character-skills/skill";
import { CareerGroupEnum, CareerEnum } from './careers';
import { SettingEnum } from "../game-configuration/settings";
import { SkillsEnum } from '../character-skills/skills';

export interface Career {
    id: CareerEnum;
    display: string;
    skills: SkillsEnum[];
}

export interface CareerGroup {
    id: CareerGroupEnum;
    disabled?: boolean;
    name: string;
    careerList: Map<CareerEnum, Career>;
    setting: SettingEnum[];
}

