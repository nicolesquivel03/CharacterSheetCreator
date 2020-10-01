import { PlayerStat, PlayerCharacteristic } from "./player-characteristics";
import { PlayerSkill } from "./player-skills";
import { Archetype } from "../character-description/archetype";
import { Career } from "../character-description/career";
import { Setting } from "../game-configuration/settings";

export interface Player {
    playerStats: PlayerStat[];
    playerCharacteristics: PlayerCharacteristic[];
    playerSkills: PlayerSkill[];
    playerArchetype: Archetype;
    playerCareer: Career;
    playerName: string;
    characterName: string;
    setting: Setting;
    magicEnabled: boolean;
}