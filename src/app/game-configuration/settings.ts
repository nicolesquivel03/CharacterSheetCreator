export enum SettingEnum {
    All,
    Fantasy,
    ModernDay,
    ScienceFiction,
    Steampunk,
    SpaceOpera,
    WeirdWar,
    Magic
}

export interface Setting {
    id: SettingEnum,
    display: string
}

export const Settings: Map<SettingEnum, Setting> = new Map ([
    [
        SettingEnum.Fantasy, {
            id: SettingEnum.Fantasy,
            display: "Fantasy"
        }
    ],
    [
        SettingEnum.ModernDay, {
            id: SettingEnum.ModernDay,
            display: "Modern Day"
        }
    ],
    [
        SettingEnum.ScienceFiction, {
            id: SettingEnum.ScienceFiction,
            display: "Science Fiction"
        }
    ],
    [
        SettingEnum.Steampunk, {
            id: SettingEnum.Steampunk,
            display: "Steampunk"
        }
    ],
    [
        SettingEnum.SpaceOpera, {
            id: SettingEnum.SpaceOpera,
            display: "Space Opera"
        }
    ],
    [
        SettingEnum.WeirdWar, {
            id: SettingEnum.WeirdWar,
            display: "Weird War"
        }
    ]
])