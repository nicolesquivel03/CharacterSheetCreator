import { Archetype } from './archetype';
import { SkillsEnum } from '../character-skills/skills';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { StatEnum } from '../character-stats/stats';

export enum ArchetypeEnum {
    AverageHuman,
    Laborer,
    Intellectual,
    Aristocrat
}

export const basicArchetypeList: Map<ArchetypeEnum, Archetype> = new Map([
    [ 
        ArchetypeEnum.AverageHuman, {
            id: ArchetypeEnum.AverageHuman,
            display: 'Average Human', 
            startingCharacteristics: new Map<CharacteristicEnum, number>([
                [CharacteristicEnum.Brawn, 2],
                [CharacteristicEnum.Agility, 2], 
                [CharacteristicEnum.Intellect, 2], 
                [CharacteristicEnum.Cunning, 2], 
                [CharacteristicEnum.Willpower, 2], 
                [CharacteristicEnum.Presence, 2] 
            ]),
            startingStats: new Map<StatEnum, number>([
                [StatEnum.Wounds, 10], 
                [StatEnum.Strain, 10]
            ]),
            startingSkill: []
        }
    ],
    [ 
        ArchetypeEnum.Laborer, {
            id: ArchetypeEnum.Laborer,
            display: 'The Laborer',
            startingCharacteristics: new Map<CharacteristicEnum, number>([
                [CharacteristicEnum.Brawn, 3],
                [CharacteristicEnum.Agility, 2], 
                [CharacteristicEnum.Intellect, 2], 
                [CharacteristicEnum.Cunning, 2], 
                [CharacteristicEnum.Willpower, 1], 
                [CharacteristicEnum.Presence, 2] 
            ]),
            startingStats: new Map<StatEnum, number>([ 
                [StatEnum.Wounds, 12], 
                [StatEnum.Strain, 8]
            ]),
            startingSkill: [SkillsEnum.Athletics]
        }
    ],
    [ 
        ArchetypeEnum.Intellectual, { 
            id: ArchetypeEnum.Intellectual,
            display: 'The Intellectual',
            startingCharacteristics: new Map<CharacteristicEnum, number>([
                [CharacteristicEnum.Brawn, 2],
                [CharacteristicEnum.Agility, 1], 
                [CharacteristicEnum.Intellect, 3], 
                [CharacteristicEnum.Cunning, 2], 
                [CharacteristicEnum.Willpower, 2], 
                [CharacteristicEnum.Presence, 2]
            ]),
            startingStats: new Map<StatEnum, number>([
                [StatEnum.Wounds, 8], 
                [StatEnum.Strain, 12]
            ]),
            startingSkill: [SkillsEnum.Knowledge] // TODO: ADD ALL KNOWLEDGE SKILLS
        }
    ],
    [
        ArchetypeEnum.Aristocrat, { 
            id: ArchetypeEnum.Aristocrat,
            display: 'The Aristocrat',
            startingCharacteristics: new Map<CharacteristicEnum, number>([
                [CharacteristicEnum.Brawn, 1],
                [CharacteristicEnum.Agility, 2], 
                [CharacteristicEnum.Intellect, 2], 
                [CharacteristicEnum.Cunning, 2], 
                [CharacteristicEnum.Willpower, 2], 
                [CharacteristicEnum.Presence, 3]
            ]),
            startingStats: new Map<StatEnum, number>([
                [StatEnum.Wounds, 10], 
                [StatEnum.Strain, 10]
            ]),
            startingSkill: [SkillsEnum.Cool]
        }
    ]
  ]);