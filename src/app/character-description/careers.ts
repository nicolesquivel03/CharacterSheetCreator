import { Career } from './career';

export enum CareerSkills {
    Alchemy,
    Arcana,
    Astrocatography,
    Athletics,
    Brawl,
    Charm,
    Coercion,
    Computers,
    Cool,
    Coordination,
    Deception,
    Discipline,
    Divine,
    Driving,
    Gunnery,
    Knowledge,
    Leadership,
    Mechanics,
    Medicine,
    Melee,
    Melee_Heavy,
    Melee_Light,
    Negotiation,
    Operating,
    Perception,
    Piloting,
    Primal,
    Ranged,
    Ranged_Heavy,
    Ranged_Light,
    Resilience,
    Skulduggery,
    Stealth,
    Streetwise,
    Survival,
    Vigilance
}

export const basicCareerList: Career[] = [
    {
        display: 'Entertainer', 
        value: 'entertainer',
        careerSkills: [
            CareerSkills.Charm, 
            CareerSkills.Coordination,
            CareerSkills.Deception,
            CareerSkills.Discipline,
            CareerSkills.Leadership,
            CareerSkills.Melee,
            CareerSkills.Melee_Light,
            CareerSkills.Skulduggery,
            CareerSkills.Stealth
        ]
    },
    { 
        display: 'Explorer', 
        value: 'explorer',
        careerSkills: ['athletics','brawl','coordination','deception','perception','ranged','rangedHeavy','stealth','survival']
    },
    { 
        display:'Healer', 
        value: 'healer',
        careerSkills: ['cool','discipline','anyKnowledgeSkill','medicine','melee','meleeLight','resilience','survival','vigilance']
    },
    { 
        display:'Leader', 
        value: 'leader',
        careerSkills: ['']
    },
    { 
        display:'Scoundrel', 
        value: 'scoundrel',
        careerSkills: ['']
    },
    { 
        display:'Socialite', 
        value: 'socialite',
        careerSkills: ['']
    },
    { 
        display:'Soldier', 
        value: 'soldier',
        careerSkills: ['']
    },
    { 
        display:'Tradesperson', 
        value: 'tradesperson',
        careerSkills: ['']
    }
];

export const fantasyCareerList: Career[] = [ 
    { 
        display: 'Knight', 
        value: 'knight',
        careerSkills: ['']
    },
    { 
        display: 'Priest', 
        value: 'priest',
        careerSkills: ['']
    },
    { 
        display: 'Druid', 
        value: 'druid',
        careerSkills: ['']
    },
    { 
        display: 'Wizard', 
        value: 'wizard',
        careerSkills: ['']
    }
];

export const scifiCareerList = [
    { 
        display: 'Hacker', 
        value: 'hacker',
        careerSkills: ['']
    },
    { 
        display: 'Fighter Pilot', 
        value: 'fighterPilot',
        careerSkills: ['']
    },
    { 
        display: 'Mad Scientist', 
        value: 'madScientist',
        careerSkills: ['']
    },
    { 
        display: 'Starship Captain', 
        value: 'starshipCaptain',
        careerSkills: ['']
    }
];