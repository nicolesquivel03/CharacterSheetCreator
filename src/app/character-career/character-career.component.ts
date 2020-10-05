import { Component, OnInit, Input } from '@angular/core';
import { Career, CareerGroup } from '../character-career/career'
import { basicCareerList, fantasyCareerList, scifiCareerList, CareerGroupEnum } from '../character-career/careers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';
import { CharacteristicEnum } from '../character-characteristics/characteristics'
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-character-career',
  templateUrl: './character-career.component.html',
  styleUrls: ['./character-career.component.scss']
})
export class CharacterCareerComponent implements OnInit {
  player: Player;

  descriptionControl = new FormControl();
  
  readonly careerLabel: string = 'Select Career';
  careerGroup: CareerGroup[] = [];
  
  constructor(private playerService: PlayerService) { }
  

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setCareers();
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

}
