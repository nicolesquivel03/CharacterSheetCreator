import { Career, CareerGroup } from '../character-career/career';
import { SkillList, SkillsEnum } from "../character-skills/skills";
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
                SkillsEnum.Charm, 
                SkillsEnum.Coordination,
                SkillsEnum.Deception,
                SkillsEnum.Discipline,
                SkillsEnum.Leadership,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Light,
                SkillsEnum.Skulduggery,
                SkillsEnum.Stealth
            ]
        }
    ],
    [
        CareerEnum.Explorer, { 
            id: CareerEnum.Explorer,
            display: 'Explorer',
            skills: [
                SkillsEnum.Athletics, 
                SkillsEnum.Brawl,
                SkillsEnum.Coordination,
                SkillsEnum.Deception,
                SkillsEnum.Perception,
                SkillsEnum.Ranged,
                SkillsEnum.Ranged_Heavy,
                SkillsEnum.Stealth,
                SkillsEnum.Survival
            ]
        }
    ],
    [
        CareerEnum.Healer, { 
            id: CareerEnum.Healer,
            display: 'Healer',
            skills: [
                SkillsEnum.Cool, 
                SkillsEnum.Discipline,
                SkillsEnum.Knowledge,
                SkillsEnum.Medicine,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Light,
                SkillsEnum.Resilience,
                SkillsEnum.Survival,
                SkillsEnum.Vigilance
            ]
        }
    ],
    [
        CareerEnum.Leader, { 
            id: CareerEnum.Leader,
            display: 'Leader',
            skills: [
                SkillsEnum.Charm, 
                SkillsEnum.Coercion,
                SkillsEnum.Cool,
                SkillsEnum.Discipline,
                SkillsEnum.Leadership,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Light,
                SkillsEnum.Negotiation,
                SkillsEnum.Perception
            ]
        }
    ],
    [
        CareerEnum.Scoundrel, { 
            id: CareerEnum.Scoundrel,
            display: 'Scoundrel',
            skills: [
                SkillsEnum.Charm, 
                SkillsEnum.Cool,
                SkillsEnum.Coordination,
                SkillsEnum.Deception,
                SkillsEnum.Ranged,
                SkillsEnum.Ranged_Light,
                SkillsEnum.Skulduggery,
                SkillsEnum.Stealth,
                SkillsEnum.Streetwise
            ]
        }
    ],
    [
        CareerEnum.Socialite, { 
            id: CareerEnum.Socialite,
            display: 'Socialite',
            skills: [
                SkillsEnum.Charm,
                SkillsEnum.Cool,
                SkillsEnum.Deception,
                SkillsEnum.Knowledge,
                SkillsEnum.Negotiation,
                SkillsEnum.Perception,
                SkillsEnum.Streetwise,
                SkillsEnum.Survival,
                SkillsEnum.Vigilance
            ]
        }
    ],
    [
        CareerEnum.Soldier, { 
            id: CareerEnum.Soldier,
            display: 'Soldier',
            skills: [
                SkillsEnum.Athletics, 
                SkillsEnum.Brawl,
                SkillsEnum.Coercion,
                SkillsEnum.Gunnery,
                SkillsEnum.Melee,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Heavy,
                SkillsEnum.Perception,
                SkillsEnum.Ranged,
                SkillsEnum.Ranged_Heavy,
                SkillsEnum.Vigilance
            ]
        }
    ],
    [
        CareerEnum.Tradesperson, { 
            id: CareerEnum.Tradesperson,
            display: 'Tradesperson',
            skills: [
                SkillsEnum.Athletics, 
                SkillsEnum.Brawl,
                SkillsEnum.Discipline,
                SkillsEnum.Mechanics,
                SkillsEnum.Negotiation,
                SkillsEnum.Perception,
                SkillsEnum.Resilience,
                SkillsEnum.Streetwise
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
                SkillsEnum.Athletics,
                SkillsEnum.Discipline,
                SkillsEnum.Gunnery,
                SkillsEnum.Leadership,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Heavy,
                SkillsEnum.Melee_Light,
                SkillsEnum.Resilience,
                SkillsEnum.Riding,
                SkillsEnum.Vigilance
                
            ]
        }
    ],
    [
        CareerEnum.Priest, { 
            id: CareerEnum.Priest, 
            display: 'Priest',
            skills: [
                SkillsEnum.Charm,
                SkillsEnum.Coercion,
                SkillsEnum.Cool,
                SkillsEnum.Discipline,
                SkillsEnum.Divine,
                SkillsEnum.Medicine,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Light,
                SkillsEnum.Negotiation
            ]
        }
    ],
    [
        CareerEnum.Druid, { 
            id: CareerEnum.Druid, 
            display: 'Druid',
            skills: [
                SkillsEnum.Athletics,
                SkillsEnum.Brawl,
                SkillsEnum.Coordination,
                SkillsEnum.Melee,
                SkillsEnum.Melee_Heavy,
                SkillsEnum.Primal,
                SkillsEnum.Resilience,
                SkillsEnum.Survival,
                SkillsEnum.Vigilance
            ]
        }
    ],
    [
        CareerEnum.Wizard, { 
            id: CareerEnum.Wizard, 
            display: 'Wizard',
            skills: [
                SkillsEnum.Arcana,
                SkillsEnum.Alchemy,
                SkillsEnum.Coercion,
                SkillsEnum.Discipline,
                SkillsEnum.Knowledge,
                SkillsEnum.Leadership,
                SkillsEnum.Skulduggery,
                SkillsEnum.Stealth,
                SkillsEnum.Vigilance
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
                SkillsEnum.Computers,
                SkillsEnum.Discipline,
                SkillsEnum.Knowledge,                
                SkillsEnum.Mechanics,
                SkillsEnum.Perception,
                SkillsEnum.Piloting,
                SkillsEnum.Streetwise,
                SkillsEnum.Vigilance
            ]
        }
    ],
    [
        CareerEnum.FighterPilot, { 
            id: CareerEnum.FighterPilot, 
            display: 'Fighter Pilot',
            skills: [
                SkillsEnum.Cool,
                SkillsEnum.Driving,
                SkillsEnum.Gunnery,                
                SkillsEnum.Mechanics,
                SkillsEnum.Perception,
                SkillsEnum.Piloting,
                SkillsEnum.Ranged,
                SkillsEnum.Ranged_Light,
                SkillsEnum.Vigilance
            ]
        }
    ],[
        CareerEnum.MadScientist, { 
            id: CareerEnum.MadScientist, 
            display: 'Mad Scientist', 
            skills: [
                SkillsEnum.Alchemy,
                SkillsEnum.Arcana,
                SkillsEnum.Coercion,
                SkillsEnum.Knowledge,                
                SkillsEnum.Mechanics,
                SkillsEnum.Medicine,
                SkillsEnum.Operating,
                SkillsEnum.Skulduggery,
                SkillsEnum.Ranged
            ]
        }
    ],[
        CareerEnum.StarshipCaptain, { 
            id: CareerEnum.StarshipCaptain, 
            display: 'Starship Captain', 
            skills: [
                SkillsEnum.Astrocatography,
                SkillsEnum.Computers,
                SkillsEnum.Discipline,
                SkillsEnum.Gunnery,
                SkillsEnum.Knowledge,                
                SkillsEnum.Leadership,
                SkillsEnum.Mechanics,
                SkillsEnum.Operating,
                SkillsEnum.Perception
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