import { Injectable } from '@angular/core';
import { Player } from '../player/player';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

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
    playerSkills: [],
    playerCharacteristics: [],
    playerStats: [],
    setting: null
  });

  player$ = this.player.asObservable();

  constructor() {
  }

  public updatePlayer(player: Player) {
    this.player.next(player);
  }
}
