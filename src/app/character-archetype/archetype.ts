import { ArchetypeEnum, ArchetypeGroupEnum } from './archetypes';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { StatEnum } from '../character-stats/stats';
import { SkillsEnum } from '../character-skills/skills';
import { SettingEnum } from '../game-configuration/settings';

export interface Archetype {
    id: ArchetypeEnum;
    display: string;
    startingCharacteristics: Map<CharacteristicEnum, number>;
    startingStats: Map<StatEnum, number>;
    startingSkills?: SkillsEnum[];
}

export interface ArchetypeGroup {
    id: ArchetypeGroupEnum;
    name: string;
    allowedSetting: SettingEnum;
    archetypeList: Map<ArchetypeEnum, Archetype>;
    disabled?: boolean;
}