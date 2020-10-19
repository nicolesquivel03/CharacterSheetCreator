import { ArchetypeEnum } from './archetypes';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { StatEnum } from '../character-stats/stats';
import { SkillsEnum } from '../character-skills/skills';

export interface Archetype {
    id: number;
    display: string;
    startingCharacteristics: Map<CharacteristicEnum, number>;
    startingStats: Map<StatEnum, number>;
    startingSkills?: SkillsEnum[];
}

export interface ArchetypeGroup {
    disabled?: boolean;
    name: string;
    archetypes: Map<ArchetypeEnum, Archetype>;
}