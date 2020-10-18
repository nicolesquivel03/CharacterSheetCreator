import { PlayerCharacteristic, characteristicList } from "./player-characteristics";
import { SkillsEnum } from '../character-skills/skills';
import { CharacteristicEnum } from '../character-characteristics/characteristics';

export interface PlayerSkill {
    id: SkillsEnum;
    display: string;
    investedPointValue: number;
    isCareerSkill: boolean;
    greenDiceCount: number;
    yellowDiceCount: number;
    characteristic: PlayerCharacteristic;
}

export const skillList: Map<SkillsEnum, PlayerSkill> = new Map([
    [
        SkillsEnum.Alchemy, {  
            id: SkillsEnum.Alchemy,
            display: "Alchemy",
            investedPointValue: 0,
            isCareerSkill: false,
            greenDiceCount: 0,
            yellowDiceCount: 0,
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Presence]
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
            characteristic: characteristicList[CharacteristicEnum.Willpower]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Presence]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Willpower]
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
            characteristic: characteristicList[CharacteristicEnum.Willpower]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Presence]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Presence]
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
            characteristic: characteristicList[CharacteristicEnum.Intellect]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Brawn]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Agility]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Cunning]
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
            characteristic: characteristicList[CharacteristicEnum.Willpower]
        }
    ]
])