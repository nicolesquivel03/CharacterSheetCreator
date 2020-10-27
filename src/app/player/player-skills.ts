import {  } from "./player-characteristics";
import { SkillsEnum } from '../character-skills/skills';
import { CharacteristicEnum } from '../character-characteristics/characteristics';

export interface PlayerSkill {
    id: SkillsEnum;
    display: string;
    investedPointValue: number;
    isCareerSkill: boolean;
    greenDiceCount: number;
    yellowDiceCount: number;
    associatedCharacteristic: CharacteristicEnum;
    idDisabled: boolean;
}

export const playerSkillList: Map<SkillsEnum, PlayerSkill> = new Map([
    [
        SkillsEnum.Alchemy, {  
            id: SkillsEnum.Alchemy,
            display: "Alchemy",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Arcana, { 
            id: SkillsEnum.Arcana,
            display: "Arcana",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Astrocatography, { 
            id: SkillsEnum.Astrocatography,
            display: "Astrocatography",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Athletics, { 
            id: SkillsEnum.Athletics,
            display: "Athletics",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Brawl, { 
            id: SkillsEnum.Brawl,
            display: "Brawl",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Charm, { 
            id: SkillsEnum.Charm,
            display: "Charm",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Presence,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Coercion, { 
            id: SkillsEnum.Coercion,
            display: "Coercion",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Willpower,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Computers, { 
            id: SkillsEnum.Computers,
            display: "Computers",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Cool, { 
            id: SkillsEnum.Cool,
            display: "Cool",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Presence,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Coordination, { 
            id: SkillsEnum.Coordination,
            display: "Coordination",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Deception, { 
            id: SkillsEnum.Deception,
            display: "Deception",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Discipline, { 
            id: SkillsEnum.Discipline,
            display: "Discipline",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Willpower,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Divine, { 
            id: SkillsEnum.Divine,
            display: "Divine",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Willpower,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Driving, { 
            id: SkillsEnum.Driving,
            display: "Driving",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Gunnery, { 
            id: SkillsEnum.Gunnery,
            display: "Gunnery",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Knowledge, { 
            id: SkillsEnum.Knowledge,
            display: "Knowledge",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: false
        }
    ],

    /*
    -- TODO: Add all Knowledge possible skills
    */

    [
        SkillsEnum.Leadership, { 
            id: SkillsEnum.Leadership,
            display: "Leadership",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Presence,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Mechanics, { 
            id: SkillsEnum.Mechanics,
            display: "Mechanics",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Medicine, { 
            id: SkillsEnum.Medicine,
            display: "Medicine",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Melee, { 
            id: SkillsEnum.Melee,
            display: "Melee",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Melee_Heavy, {
            id: SkillsEnum.Melee_Heavy,
            display: "Melee (Heavy)",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Melee_Light, { 
            id: SkillsEnum.Melee_Light,
            display: "Melee (Light)",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Negotiation, { 
            id: SkillsEnum.Negotiation,
            display: "Negotiation",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Presence,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Operating, { 
            id: SkillsEnum.Operating,
            display: "Operating",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Intellect,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Perception, { 
            id: SkillsEnum.Perception,
            display: "Perception",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Piloting, { 
            id: SkillsEnum.Piloting,
            display: "Piloting",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Primal, { 
            id: SkillsEnum.Primal,
            display: "Primal",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Ranged, { 
            id: SkillsEnum.Ranged,
            display: "Ranged",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Ranged_Heavy, { 
            id: SkillsEnum.Ranged_Heavy,
            display: "Ranged (Heavy)",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Ranged_Light, { 
            id: SkillsEnum.Ranged_Light,
            display: "Ranged (Light)",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Resilience, { 
            id: SkillsEnum.Resilience,
            display: "Resilience",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Brawn,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Riding, { 
            id: SkillsEnum.Riding,
            display: "Riding",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: true
        }
    ],
    [
        SkillsEnum.Skulduggery, { 
            id: SkillsEnum.Skulduggery,
            display: "Skulduggery",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Stealth, { 
            id: SkillsEnum.Stealth,
            display: "Stealth",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Agility,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Streetwise, { 
            id: SkillsEnum.Streetwise,
            display: "Streetwise",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Survival, { 
            id: SkillsEnum.Survival,
            display: "Survival",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Cunning,
            idDisabled: false
        }
    ],
    [
        SkillsEnum.Vigilance, { 
            id: SkillsEnum.Vigilance,
            display: "Vigilance",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            associatedCharacteristic: CharacteristicEnum.Willpower,
            idDisabled: false
        }
    ]
])