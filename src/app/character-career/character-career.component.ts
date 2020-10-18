import { Component, OnInit, Input } from '@angular/core';
import { Career, CareerGroup } from '../character-career/career'
import { basicCareerList, fantasyCareerList, scifiCareerList, CareerGroupEnum, careerGroupList, CareerEnum } from '../character-career/careers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Skill } from '../character-skills/skill';

@Component({
  selector: 'app-character-career',
  templateUrl: './character-career.component.html',
  styleUrls: ['./character-career.component.scss']
})
export class CharacterCareerComponent implements OnInit {
  player: Player;

  descriptionControl = new FormControl();
  
  readonly careerLabel: string = 'Select Career';
  careerGroups: Map<CareerGroupEnum, CareerGroup>;
  selectedCareerGroup: Map<CareerEnum, Career>;
  
  constructor(private playerService: PlayerService) { }
  

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setCareers();
  }

  setCareers(): void {
    this.careerGroups = careerGroupList;
    this.selectedCareerGroup = basicCareerList;
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
    this.careerGroups.forEach((group) => {
      if(this.player.setting.id) {

        if(group.setting.indexOf(SettingEnum.All) !== -1 || group.setting.indexOf(this.player.setting.id) !== -1) {
          group.disabled = false;
        } else {
          group.disabled = true;
        }
      }
    });
  }
/*
  onCareerSelection(event): void {
    console.log(`Updating Career`);
    const selectectCareer = this.get(event.value);
      this.player.playerCareer = selectectCareer;
      selectectCareer.skills.forEach(mySkill => {
        this.makeCareerSkills(mySkill)
      });
      this.playerService.updatePlayer(this.player);
    }
    console.log(`Updating Career using ${this.player.playerCareer.display}`);
  }

  selectedCareerChoice(careerValue)

  makeCareerSkills(chosenSkill: Skill): void{
    this.player.playerSkills[chosenSkill.id].isCareerSkill = true;
  }
*/

}
