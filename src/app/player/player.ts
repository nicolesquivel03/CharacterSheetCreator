import { PlayerCharacteristic } from "./player-characteristics";
import { PlayerStat } from "./player-stats";
import { PlayerSkill } from "./player-skills";
import { Archetype } from "../character-archetype/archetype";
import { Career } from "../character-career/career";
import { Setting } from "../game-configuration/settings";
import { CharacteristicEnum } from "../character-characteristics/characteristics";
import { StatEnum } from "../character-stats/stats"

export interface Player {
    playerStats: Map <StatEnum, PlayerStat>;
    playerCharacteristics: Map<CharacteristicEnum, PlayerCharacteristic>;
    playerSkills: PlayerSkill[];
    playerArchetype: Archetype;
    playerCareer: Career;
    playerName: string;
    characterName: string;
    setting: Setting;
    magicEnabled: boolean;
}