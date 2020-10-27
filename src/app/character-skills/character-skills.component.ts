import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player/player';
import { Skill } from './skill';
import { SkillList, SkillsEnum } from './skills';
import { PlayerService } from '../player/player.service';
import { playerSkillList } from '../player/player-skills';
import { SettingEnum } from '../game-configuration/settings'

@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.scss']
})
export class CharacterSkillsComponent implements OnInit {
  @Input() player: Player;

  readonly SkillTitleLabel: "Skills";
  selectSkillList: Map<SkillsEnum, Skill> = SkillList;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setActiveSkills;
  }

  setActiveSkills(): void {
    SkillList.forEach((selectedSkill) => {
      selectedSkill.setting.forEach((possibleSetting) => {
        if (possibleSetting != this.player.setting.id && possibleSetting != SettingEnum.All)
        {
          this.player.playerSkills[selectedSkill.id].idDisabled = true;
        }
      });
    });
    this.playerService.updatePlayer(this.player);
  }
}
