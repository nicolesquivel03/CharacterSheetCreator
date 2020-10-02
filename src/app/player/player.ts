import { PlayerStat, PlayerCharacteristic } from "./player-characteristics";
import { PlayerSkill } from "./player-skills";
import { Archetype } from "../character-description/archetype";
import { Career } from "../character-description/career";
import { Setting } from "../game-configuration/settings";
import { CharacteristicEnum } from '../character-characteristics/characteristics';

export interface Player {
    playerStats: PlayerStat[];
    playerCharacteristics: Map<CharacteristicEnum, PlayerCharacteristic>;
    playerSkills: PlayerSkill[];
    playerArchetype: Archetype;
    playerCareer: Career;
    playerName: string;
    characterName: string;
    setting: Setting;
    magicEnabled: boolean;
}