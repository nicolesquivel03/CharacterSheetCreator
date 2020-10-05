import { Career } from '../character-career/career';
import { Skills, SkillsEnum } from "../character-skills/skills";
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
        Careers.Priest, { 
            id: Careers.Priest, 
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
        Careers.Druid, { 
            id: Careers.Druid, 
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
        Careers.Wizard, { 
            id: Careers.Wizard, 
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

export const scifiCareerList: Map<Careers, Career> =  new Map([
    [
        Careers.Hacker, { 
            id: Careers.Hacker, 
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
        Careers.FighterPilot, { 
            id: Careers.FighterPilot, 
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
        Careers.MadScientist, { 
            id: Careers.MadScientist, 
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
        Careers.StarshipCaptain, { 
            id: Careers.StarshipCaptain, 
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


/*export const basicCareerList: Map<Careers, Career> = new Map([
*/
