import { Skill } from "../character-skills/skill";
import { CareerGroupEnum, CareerEnum } from './careers';
import { SettingEnum } from "../game-configuration/settings";

export interface Career {
    id: number;
    display: string;
    skills: Skill[];
}

export interface CareerGroup {
    id: CareerGroupEnum;
    disabled?: boolean;
    name: string;
    careerList: Map<CareerEnum, Career>;
    setting: SettingEnum[];
}

