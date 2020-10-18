import { Career, CareerGroup } from '../character-career/career';
import { Skills, SkillsEnum } from "../character-skills/skills";
import { SettingEnum } from "../game-configuration/settings";

export enum CareerEnum {
    Entertainer,
    Explorer,
    Healer,
    Leader,
    Scoundrel,
    Socialite,
    Soldier,
    Tradesperson,
    Knight,
    Priest,
    Druid,
    Wizard,
    Hacker,
    FighterPilot,
    MadScientist,
    StarshipCaptain
}

export enum CareerGroupEnum {
    Basic,
    Fantasy,
    SciFi
}

export const basicCareerList: Map<CareerEnum, Career> = new Map([
    [
        CareerEnum.Entertainer, {
            id: CareerEnum.Entertainer,
            display: 'Entertainer', 
            skills: [
                Skills[SkillsEnum.Charm], 
                Skills[SkillsEnum.Coordination],
                Skills[SkillsEnum.Deception],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Leadership],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Light],
                Skills[SkillsEnum.Skulduggery],
                Skills[SkillsEnum.Stealth]
            ]
        }
    ],
    [
        CareerEnum.Explorer, { 
            id: CareerEnum.Explorer,
            display: 'Explorer',
            skills: [
                Skills[SkillsEnum.Athletics], 
                Skills[SkillsEnum.Brawl],
                Skills[SkillsEnum.Coordination],
                Skills[SkillsEnum.Deception],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Ranged],
                Skills[SkillsEnum.Ranged_Heavy],
                Skills[SkillsEnum.Stealth],
                Skills[SkillsEnum.Survival]
            ]
        }
    ],
    [
        CareerEnum.Healer, { 
            id: CareerEnum.Healer,
            display: 'Healer',
            skills: [
                Skills[SkillsEnum.Cool], 
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Knowledge],
                Skills[SkillsEnum.Medicine],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Light],
                Skills[SkillsEnum.Resilience],
                Skills[SkillsEnum.Survival],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],
    [
        CareerEnum.Leader, { 
            id: CareerEnum.Leader,
            display: 'Leader',
            skills: [
                Skills[SkillsEnum.Charm], 
                Skills[SkillsEnum.Coercion],
                Skills[SkillsEnum.Cool],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Leadership],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Light],
                Skills[SkillsEnum.Negotiation],
                Skills[SkillsEnum.Perception]
            ]
        }
    ],
    [
        CareerEnum.Scoundrel, { 
            id: CareerEnum.Scoundrel,
            display: 'Scoundrel',
            skills: [
                Skills[SkillsEnum.Charm], 
                Skills[SkillsEnum.Cool],
                Skills[SkillsEnum.Coordination],
                Skills[SkillsEnum.Deception],
                Skills[SkillsEnum.Ranged],
                Skills[SkillsEnum.Ranged_Light],
                Skills[SkillsEnum.Skulduggery],
                Skills[SkillsEnum.Stealth],
                Skills[SkillsEnum.Streetwise]
            ]
        }
    ],
    [
        CareerEnum.Socialite, { 
            id: CareerEnum.Socialite,
            display: 'Socialite',
            skills: [
                Skills[SkillsEnum.Charm],
                Skills[SkillsEnum.Cool],
                Skills[SkillsEnum.Deception],
                Skills[SkillsEnum.Knowledge],
                Skills[SkillsEnum.Negotiation],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Streetwise],
                Skills[SkillsEnum.Survival],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],
    [
        CareerEnum.Soldier, { 
            id: CareerEnum.Soldier,
            display: 'Soldier',
            skills: [
                Skills[SkillsEnum.Athletics], 
                Skills[SkillsEnum.Brawl],
                Skills[SkillsEnum.Coercion],
                Skills[SkillsEnum.Gunnery],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Heavy],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Ranged],
                Skills[SkillsEnum.Ranged_Heavy],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],
    [
        CareerEnum.Tradesperson, { 
            id: CareerEnum.Tradesperson,
            display: 'Tradesperson',
            skills: [
                Skills[SkillsEnum.Athletics], 
                Skills[SkillsEnum.Brawl],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Mechanics],
                Skills[SkillsEnum.Negotiation],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Resilience],
                Skills[SkillsEnum.Streetwise]
            ]
        }
    ]
]);

export const fantasyCareerList: Map<CareerEnum, Career> = new Map([
    [
        CareerEnum.Knight, { 
            id: CareerEnum.Knight, 
            display: 'Knight',
            skills: [
                Skills[SkillsEnum.Athletics],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Gunnery],
                Skills[SkillsEnum.Leadership],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Heavy],
                Skills[SkillsEnum.Melee_Light],
                Skills[SkillsEnum.Resilience],
                Skills[SkillsEnum.Riding],
                Skills[SkillsEnum.Vigilance]
                
            ]
        }
    ],
    [
        CareerEnum.Priest, { 
            id: CareerEnum.Priest, 
            display: 'Priest',
            skills: [
                Skills[SkillsEnum.Charm],
                Skills[SkillsEnum.Coercion],
                Skills[SkillsEnum.Cool],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Divine],
                Skills[SkillsEnum.Medicine],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Light],
                Skills[SkillsEnum.Negotiation]
            ]
        }
    ],
    [
        CareerEnum.Druid, { 
            id: CareerEnum.Druid, 
            display: 'Druid',
            skills: [
                Skills[SkillsEnum.Athletics],
                Skills[SkillsEnum.Brawl],
                Skills[SkillsEnum.Coordination],
                Skills[SkillsEnum.Melee],
                Skills[SkillsEnum.Melee_Heavy],
                Skills[SkillsEnum.Primal],
                Skills[SkillsEnum.Resilience],
                Skills[SkillsEnum.Survival],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],
    [
        CareerEnum.Wizard, { 
            id: CareerEnum.Wizard, 
            display: 'Wizard',
            skills: [
                Skills[SkillsEnum.Arcana],
                Skills[SkillsEnum.Alchemy],
                Skills[SkillsEnum.Coercion],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Knowledge],
                Skills[SkillsEnum.Leadership],
                Skills[SkillsEnum.Skulduggery],
                Skills[SkillsEnum.Stealth],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ]
]);

export const scifiCareerList: Map<CareerEnum, Career> =  new Map([
    [
        CareerEnum.Hacker, { 
            id: CareerEnum.Hacker, 
            display: 'Hacker',
            skills: [
                Skills[SkillsEnum.Computers],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Knowledge],                
                Skills[SkillsEnum.Mechanics],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Piloting],
                Skills[SkillsEnum.Streetwise],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],
    [
        CareerEnum.FighterPilot, { 
            id: CareerEnum.FighterPilot, 
            display: 'Fighter Pilot',
            skills: [
                Skills[SkillsEnum.Cool],
                Skills[SkillsEnum.Driving],
                Skills[SkillsEnum.Gunnery],                
                Skills[SkillsEnum.Mechanics],
                Skills[SkillsEnum.Perception],
                Skills[SkillsEnum.Piloting],
                Skills[SkillsEnum.Ranged],
                Skills[SkillsEnum.Ranged_Light],
                Skills[SkillsEnum.Vigilance]
            ]
        }
    ],[
        CareerEnum.MadScientist, { 
            id: CareerEnum.MadScientist, 
            display: 'Mad Scientist', 
            skills: [
                Skills[SkillsEnum.Alchemy],
                Skills[SkillsEnum.Arcana],
                Skills[SkillsEnum.Coercion],
                Skills[SkillsEnum.Knowledge],                
                Skills[SkillsEnum.Mechanics],
                Skills[SkillsEnum.Medicine],
                Skills[SkillsEnum.Operating],
                Skills[SkillsEnum.Skulduggery],
                Skills[SkillsEnum.Ranged]
            ]
        }
    ],[
        CareerEnum.StarshipCaptain, { 
            id: CareerEnum.StarshipCaptain, 
            display: 'Starship Captain', 
            skills: [
                Skills[SkillsEnum.Astrocatography],
                Skills[SkillsEnum.Computers],
                Skills[SkillsEnum.Discipline],
                Skills[SkillsEnum.Gunnery],
                Skills[SkillsEnum.Knowledge],                
                Skills[SkillsEnum.Leadership],
                Skills[SkillsEnum.Mechanics],
                Skills[SkillsEnum.Operating],
                Skills[SkillsEnum.Perception]
            ]
        }
    ]
]);


export const careerGroupList: Map<CareerGroupEnum, CareerGroup> = new Map([
    [
        CareerGroupEnum.Basic, {
            id: CareerGroupEnum.Basic,
            disabled: false,
            name: 'Basic Careers',
            careerList: basicCareerList,
            setting: [SettingEnum.All]
        }
    ],
    [
        CareerGroupEnum.Fantasy, {
            id: CareerGroupEnum.Basic,
            disabled: false,
            name: 'Fantasy Careers',
            careerList: fantasyCareerList,
            setting: [SettingEnum.All]
        }
    ],
    [
        CareerGroupEnum.SciFi, {
            id: CareerGroupEnum.Basic,
            disabled: false,
            name: 'Sci-Fi Careers',
            careerList: scifiCareerList,
            setting: [SettingEnum.All]
        }
    ]
])