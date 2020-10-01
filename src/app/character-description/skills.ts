export enum Setting {
    Fantasy,
    ModernDay,
    ScienceFiction,
    Steampunk,
    SpaceOpera,
    WeirdWar,
    Magic
}

export interface Skill {
    name: string;
    setting: Setting[];
    points: number;
    careerSkill: boolean;
}

export const Skills: Map<string, Skill> = [

]

/* Alchemy,
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

    */