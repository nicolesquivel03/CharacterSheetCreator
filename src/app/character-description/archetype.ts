import { Skill } from './skills';
import { ArchetypeEnum } from './archetypes';

export interface Archetype {
    id: number;
    display: string;
    startingBrawn: number;
    startingAgility: number;
    startingIntellect: number;
    startingCunning: number;
    startingWillpower: number;
    startingPresence: number;
    startingWounds: number;
    startingStrain: number;
    startingExperience: number;
    startingSkill: Skill[];
}

export interface ArchetypeGroup {
    disabled?: boolean;
    name: string;
    archetypes: Map<ArchetypeEnum, Archetype>;
}