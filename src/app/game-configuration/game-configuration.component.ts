import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Setting, Settings } from './settings';
import { PlayerService } from '../player/player.service';
import { ConfigurationsService } from '../services/configurations.service';
import { Player } from '../player/player';
import { Configurations } from '../entities/configurations.model';

@Component({
  selector: 'app-game-configuration',
  templateUrl: './game-configuration.component.html',
  styleUrls: ['./game-configuration.component.scss']
})
export class GameConfigurationComponent implements OnInit {
  player: Player;

  configurationControl = new FormControl();
  settings = Settings;
  settingsLabel = "Settings";
  magicLabel = "Magic Enabled";

  configurations: Configurations;

  constructor(private playerService: PlayerService,
    private configurationService: ConfigurationsService
    ) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);

    this.configurationService.configuration.subscribe(config =>
      { 
        var configurationObj = config.data();
        
        console.log(configurationObj);
        if(configurationObj) {
          this.configurations = new Configurations(configurationObj.magicEnabled, configurationObj.settings);
        }
      });
  }

  getSetting(): string {
    return this.player.setting ? this.player.setting.display : "";
  }

  onChangeUpdate(event): void {
    this.playerService.updatePlayer(this.player);
    console.log(`Setting changed to ${this.getSetting()}. Magic is ${this.player.magicEnabled}`);
  }

}
