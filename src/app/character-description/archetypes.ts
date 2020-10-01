import { Archetype } from './archetype';
import { SkillsEnum, Skills } from './skills';

export enum ArchetypeEnum {
    Human,
    Laborer,
    Intellectual,
    Aristocrat
}

export const basicArchetypeList: Map<ArchetypeEnum, Archetype> = new Map([
    [ 
        ArchetypeEnum.Human, {
            id: ArchetypeEnum.Human,
            display: 'Average Human', 
            startingBrawn: 2, 
            startingAgility: 2, 
            startingIntellect: 2, 
            startingCunning: 2, 
            startingWillpower: 2, 
            startingPresence: 2, 
            startingWounds: 10, 
            startingStrain: 10, 
            startingExperience: 110, 
            startingSkill: []
        }
    ],
    [ 
        ArchetypeEnum.Laborer, {
            id: ArchetypeEnum.Laborer,
            display: 'The Laborer',
            startingBrawn: 3, 
            startingAgility: 2, 
            startingIntellect: 2, 
            startingCunning: 2, 
            startingWillpower: 1, 
            startingPresence: 2, 
            startingWounds: 12, 
            startingStrain: 8, 
            startingExperience: 100, 
            startingSkill: [ Skills[SkillsEnum.Athletics] ]
        }
    ],
    [ 
        ArchetypeEnum.Intellectual, { 
            id: ArchetypeEnum.Intellectual,
            display: 'The Intellectual',
            startingBrawn: 2, 
            startingAgility: 1, 
            startingIntellect: 3, 
            startingCunning: 2, 
            startingWillpower: 2, 
            startingPresence: 2, 
            startingWounds: 8, 
            startingStrain: 12, 
            startingExperience: 100, 
            startingSkill: [ Skills[SkillsEnum.Knowledge] ] // TODO: ADD ALL KNOWLEDGE SKILLS
        }
    ],
    [
        ArchetypeEnum.Aristocrat, { 
            id: ArchetypeEnum.Aristocrat,
            display: 'The Aristocrat',
            startingBrawn: 1, 
            startingAgility: 2, 
            startingIntellect: 2, 
            startingCunning: 2, 
            startingWillpower: 2, 
            startingPresence: 3, 
            startingWounds: 10, 
            startingStrain: 10, 
            startingExperience: 100, 
            startingSkill: [ Skills[SkillsEnum.Cool] ]
        }
    ]
  ]);