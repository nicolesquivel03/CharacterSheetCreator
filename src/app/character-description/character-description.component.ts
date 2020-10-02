import { Component, OnInit, Input } from '@angular/core';
import { Career, CareerGroup } from '../character-description/career';
import { Archetype, ArchetypeGroup } from '../character-description/archetype';
import { basicArchetypeList } from '../character-description/archetypes';
import { basicCareerList, fantasyCareerList, scifiCareerList, CareerGroupEnum } from '../character-description/careers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Player } from '../player/player';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {
  player: Player;

  descriptionControl = new FormControl();

  readonly characterNameLabel: string = 'Character Name';
  readonly playerNameLabel: string = 'Player Name';
  
  readonly careerLabel: string = 'Select Career';
  careerGroup: CareerGroup[] = [];
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeGroup: ArchetypeGroup[] = [];
  
  constructor(private playerService: PlayerService) { }
  

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setCareers();
    this.setArchetypes();
  }

  setCareers(): void {
    this.careerGroup = [
      {
        id: CareerGroupEnum.Basic,
        name: "Basic Careers",
        careers: basicCareerList,
        setting: [ SettingEnum.All ],
        disabled: false
      },
      {
        id: CareerGroupEnum.Fantasy,
        name: "Fantasy Careers",
        careers: fantasyCareerList,
        setting: [ SettingEnum.Fantasy],
        disabled: true
      },
      {
        id: CareerGroupEnum.SciFi,
        name: "High-Tech Careers", 
        careers: scifiCareerList,
        setting: [ SettingEnum.ModernDay, SettingEnum.ScienceFiction, SettingEnum.SpaceOpera],
        disabled: true
      }
    ];
  }

  onCareerOpened(event): void {
    if(this.player.setting) {
      console.log(`Updating Career Groups using ${this.player.setting.display}`);
      
      // Event is true if opened, false if closing
      if(event) {
        this.updateCareerGroups();
      }
    }
  }

  updateCareerGroups(): void {
    this.careerGroup.forEach((group) => {
      if(this.player.setting.id) {

        if(group.setting.indexOf(SettingEnum.All) !== -1 || group.setting.indexOf(this.player.setting.id) !== -1) {
          group.disabled = false;
        } else {
          group.disabled = true;
        }
      }
    });
  }
s
  setArchetypes(): void {
    this.archetypeGroup = [
      {
        name: "Basic Archetypes",
        archetypes: basicArchetypeList
      }
    ] 
  }

  onArchetypeOpened(event): void {
    if(this.player.setting) {
      console.log(`Updating Chracteristics and stats using ${this.player.setting.display}`);
      
      // Event is true if opened, false if closing
      if(event) {
        this.updateArchetypeAndCharacteristics();
      }
    }
  }

  updateArchetypeAndCharacteristics(): void {
    /*
    this.player.playerCharacteristics
    this.playerService.updatePlayer(this.player);
  
    playerStats: PlayerStat[];
    PlayerCharacteristic[];
    PlayerSkill[];
    Archetype;s*/
    
  }
}


