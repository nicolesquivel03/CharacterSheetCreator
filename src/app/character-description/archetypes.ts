import { Archetype } from './archetype';

export const basicArchetypeList: Archetype[] = [
    { 
        display: 'Average Human', 
        value: 'human', 
        startingBrawn: 2, 
        startingAgility: 2, 
        startingIntellect: 2, 
        startingCunning: 2, 
        startingWillpower: 2, 
        startingPresence: 2, 
        startingWounds: 10, 
        startingStrain: 10, 
        startingExperience: 110, 
        startingSkill: ['nonCareerSkill','nonCareerSkill']
    },
    { 
        display: 'The Laborer', 
        value: 'laborer',
        startingBrawn: 3, 
        startingAgility: 2, 
        startingIntellect: 2, 
        startingCunning: 2, 
        startingWillpower: 1, 
        startingPresence: 2, 
        startingWounds: 12, 
        startingStrain: 8, 
        startingExperience: 100, 
        startingSkill: ['athletics']
     },
    { 
        display: 'The Intellectual', 
        value: 'intellectual',
        startingBrawn: 2, 
        startingAgility: 1, 
        startingIntellect: 3, 
        startingCunning: 2, 
        startingWillpower: 2, 
        startingPresence: 2, 
        startingWounds: 8, 
        startingStrain: 12, 
        startingExperience: 100, 
        startingSkill: ['anyKnowledgeSkill']
    },
    {
        display: 'The Aristocrat', 
        value: 'aristocrat',
        startingBrawn: 1, 
        startingAgility: 2, 
        startingIntellect: 2, 
        startingCunning: 2, 
        startingWillpower: 2, 
        startingPresence: 3, 
        startingWounds: 10, 
        startingStrain: 10, 
        startingExperience: 100, 
        startingSkill: ['cool']
    }
  ];