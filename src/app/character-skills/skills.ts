import { Skill } from "./skill"
import { CharacteristicEnum } from "../character-characteristics/characteristics";
import { SettingEnum } from "../game-configuration/settings";

export enum SkillsEnum {
    Alchemy,
    Any,
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
    Riding,
    Skulduggery,
    Stealth,
    Streetwise,
    Survival,
    Vigilance
}

export const SkillList: Map<SkillsEnum, Skill> = new Map([
    [
        SkillsEnum.Alchemy, { 
            id: SkillsEnum.Alchemy,
            display: "Alchemy",
            setting: [ SettingEnum.Fantasy, SettingEnum.Steampunk, SettingEnum.WeirdWar],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Arcana, { 
            id: SkillsEnum.Arcana,
            display: "Arcana",
            setting: [ SettingEnum.Magic ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Astrocatography, { 
            id: SkillsEnum.Astrocatography,
            display: "Astrocatography",
            setting: [ SettingEnum.SpaceOpera, SettingEnum.ScienceFiction ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Athletics, { 
            id: SkillsEnum.Athletics,
            display: "Athletics",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Brawl, { 
            id: SkillsEnum.Brawl,
            display: "Brawl",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Charm, { 
            id: SkillsEnum.Charm,
            display: "Charm",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Presence
        }
    ],
    [
        SkillsEnum.Coercion, { 
            id: SkillsEnum.Coercion,
            display: "Coercion",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Willpower
        }
    ],
    [
        SkillsEnum.Computers, { 
            id: SkillsEnum.Computers,
            display: "Computers",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.SpaceOpera],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Cool, { 
            id: SkillsEnum.Cool,
            display: "Cool",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Presence
        }
    ],
    [
        SkillsEnum.Coordination, { 
            id: SkillsEnum.Coordination,
            display: "Coordination",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Deception, { 
            id: SkillsEnum.Deception,
            display: "Deception",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Discipline, { 
            id: SkillsEnum.Discipline,
            display: "Discipline",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Willpower
        }
    ],
    [
        SkillsEnum.Divine, { 
            id: SkillsEnum.Divine,
            display: "Divine",
            setting: [ SettingEnum.Magic ],
            associatedCharacteristic: CharacteristicEnum.Willpower
        }
    ],
    [
        SkillsEnum.Driving, { 
            id: SkillsEnum.Driving,
            display: "Driving",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Gunnery, { 
            id: SkillsEnum.Gunnery,
            display: "Gunnery",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Knowledge, { 
            id: SkillsEnum.Knowledge,
            display: "Knowledge",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],

    /*
    -- TODO: Add all Knowledge possible skills
    */

    [
        SkillsEnum.Leadership, { 
            id: SkillsEnum.Leadership,
            display: "Leadership",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Presence
        }
    ],
    [
        SkillsEnum.Mechanics, { 
            id: SkillsEnum.Mechanics,
            display: "Mechanics",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Medicine, { 
            id: SkillsEnum.Medicine,
            display: "Medicine",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Melee, { 
            id: SkillsEnum.Melee,
            display: "Melee",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Melee_Heavy, {
            id: SkillsEnum.Melee_Heavy,
            display: "Melee (Heavy)",
            setting: [ SettingEnum.Fantasy ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Melee_Light, { 
            id: SkillsEnum.Melee_Light,
            display: "Melee (Light)",
            setting: [ SettingEnum.Fantasy ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Negotiation, { 
            id: SkillsEnum.Negotiation,
            display: "Negotiation",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Presence
        }
    ],
    [
        SkillsEnum.Operating, { 
            id: SkillsEnum.Operating,
            display: "Operating",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Intellect
        }
    ],
    [
        SkillsEnum.Perception, { 
            id: SkillsEnum.Perception,
            display: "Perception",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Piloting, { 
            id: SkillsEnum.Piloting,
            display: "Piloting",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Primal, { 
            id: SkillsEnum.Primal,
            display: "Primal",
            setting: [ SettingEnum.Magic ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Ranged, { 
            id: SkillsEnum.Ranged,
            display: "Ranged",
            setting: [ SettingEnum.Fantasy ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Ranged_Heavy, { 
            id: SkillsEnum.Ranged_Heavy,
            display: "Ranged (Heavy)",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Ranged_Light, { 
            id: SkillsEnum.Ranged_Light,
            display: "Ranged (Light)",
            setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.Steampunk, SettingEnum.SpaceOpera, SettingEnum.WeirdWar ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Resilience, { 
            id: SkillsEnum.Resilience,
            display: "Resilience",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Brawn
        }
    ],
    [
        SkillsEnum.Riding, { 
            id: SkillsEnum.Riding,
            display: "Riding",
            setting: [ SettingEnum.Fantasy, SettingEnum.Steampunk ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Skulduggery, { 
            id: SkillsEnum.Skulduggery,
            display: "Skulduggery",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Stealth, { 
            id: SkillsEnum.Stealth,
            display: "Stealth",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Agility
        }
    ],
    [
        SkillsEnum.Streetwise, { 
            id: SkillsEnum.Streetwise,
            display: "Streetwise",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Survival, { 
            id: SkillsEnum.Survival,
            display: "Survival",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Cunning
        }
    ],
    [
        SkillsEnum.Vigilance, { 
            id: SkillsEnum.Vigilance,
            display: "Vigilance",
            setting: [ SettingEnum.All ],
            associatedCharacteristic: CharacteristicEnum.Willpower
        }
    ]
])