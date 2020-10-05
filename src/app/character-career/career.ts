import { Skill } from "../character-skills/skill";
import { Careers, CareerGroupEnum } from './careers';
import { SettingEnum } from "../game-configuration/settings";

export interface Career {
    display: string;
    id: number;
    skills: Skill[];
}

export interface CareerGroup {
    id: CareerGroupEnum;
    disabled?: boolean;
    name: string;
    careers: Map<Careers, Career>;
    setting: SettingEnum[];
}

