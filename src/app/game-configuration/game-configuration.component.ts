import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Setting, Settings } from './settings';
import { PlayerService } from '../player/player.service';
import { Player } from '../player/player';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.scss']
})
export class GameConfigurationComponent implements OnInit {
  player: Player;

  configurationControl: FormControl = new FormControl();
  settings = Settings;
  settingsLabel = "Settings";
  magicLabel = "Magic Enabled";

  // Dependency Injection
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe((player: Player) => this.player = player);
  }

  getSetting(): string {
    return this.player.setting ? this.player.setting.display : "";
  }

  onChangeUpdate(event): void {
    this.playerService.updatePlayer(this.player);
    console.log(`Setting changed to ${this.getSetting()}. Magic is ${this.player.magicEnabled}`);
  }

}
