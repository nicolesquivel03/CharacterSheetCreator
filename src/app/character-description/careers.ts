import { Career } from '../character-description/career';
import { Skills, SkillsEnum } from "../character-description/skills";
import { SettingEnum } from "../game-configuration/settings";

export enum Careers {
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

export const basicCareerList: Map<Careers, Career> = new Map([
    [
        Careers.Entertainer, {
            id: Careers.Entertainer,
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
        Careers.Explorer, { 
            id: Careers.Explorer,
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
        Careers.Healer, { 
            id: Careers.Healer,
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
        Careers.Leader, { 
            id: Careers.Leader,
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
        Careers.Scoundrel, { 
            id: Careers.Scoundrel,
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
        Careers.Socialite, { 
            id: Careers.Socialite,
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
        Careers.Soldier, { 
            id: Careers.Soldier,
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
        Careers.Tradesperson, { 
            id: Careers.Tradesperson,
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

export const fantasyCareerList: Map<Careers, Career> = new Map([
    [
        Careers.Knight, { 
            id: Careers.Knight, 
            display: 'Knight',
            skills: []
        }
    ],
    [
        Careers.Priest, { 
            id: Careers.Priest, 
            display: 'Priest',
            skills: []
        }
    ],
    [
        Careers.Druid, { 
            id: Careers.Druid, 
            display: 'Druid',
            skills: []
        }
    ],
    [
        Careers.Wizard, { 
            id: Careers.Wizard, 
            display: 'Wizard',
            skills: []
        }
    ]
]);

export const scifiCareerList: Map<Careers, Career> =  new Map([
    [
        Careers.Hacker, { 
            id: Careers.Hacker, 
            display: 'Hacker',
            skills: []
        }
    ],
    [
        Careers.FighterPilot, { 
            id: Careers.FighterPilot, 
            display: 'Fighter Pilot',
            skills: []
        }
    ],[
        Careers.MadScientist, { 
            id: Careers.MadScientist, 
            display: 'Mad Scientist', 
            skills: []
        }
    ],[
        Careers.StarshipCaptain, { 
            id: Careers.StarshipCaptain, 
            display: 'Starship Captain', 
            skills: []
        }
    ]
]);