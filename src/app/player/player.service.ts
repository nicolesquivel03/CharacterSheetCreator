import { Injectable } from '@angular/core';
import { Player } from '../player/player';
import { BehaviorSubject } from 'rxjs';
import { characteristicList, PlayerCharacteristic } from './player-characteristics'
import { PlayerStat, statsList } from './player-stats';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { StatEnum } from '../character-stats/stats';
import { PlayerSkill, playerSkillList } from './player-skills';
import { SkillsEnum } from '../character-skills/skills';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private player = new BehaviorSubject({
    characterName: "",
    magicEnabled: false,
    playerName: "",
    playerArchetype: null,
    playerCareer: null,
    playerSkills: playerSkillList,
    playerCharacteristics: characteristicList,
    playerStats: statsList,
    setting: null
  });

  player$ = this.player.asObservable();

  constructor() {
    console.log(`---- Initialized Character ----`);
    console.log(`Character Name: ${this.player.value.characterName}`);
    
    console.log(`---- Character Characteristics ----`);
    this.player.value.playerCharacteristics.forEach((value: PlayerCharacteristic, key: CharacteristicEnum) => {
      console.log(key, value);
    });

    console.log(`---- Character Stats ----`);
    this.player.value.playerStats.forEach((value: PlayerStat, key: StatEnum) => {
      console.log(key, value);
    });

    console.log(`---- Character Skills ----`);
    this.player.value.playerSkills.forEach((value: PlayerSkill, key: SkillsEnum) => {
      console.log(key, value);
    });
  }

  public updatePlayer(player: Player) {
    this.player.next(player);
  }
}