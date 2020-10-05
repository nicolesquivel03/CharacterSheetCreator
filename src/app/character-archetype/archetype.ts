import { ArchetypeEnum } from './archetypes';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { Skill } from '../character-skills/skill';
import { StatEnum } from '../character-stats/stats';

export interface Archetype {
    id: number;
    display: string;
    startingCharacteristics: Map<CharacteristicEnum, number>;
    startingStats: Map<StatEnum, number>;
    startingSkills?: Skill[];
}

export interface ArchetypeGroup {
    disabled?: boolean;
    name: string;
    archetypes: Map<ArchetypeEnum, Archetype>;
}