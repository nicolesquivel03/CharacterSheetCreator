import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player/player';
import { Skill } from './skill';
import { Skills, SkillsEnum } from './skills';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-character-skills',
  templateUrl: './character-skills.component.html',
  styleUrls: ['./character-skills.component.scss']
})
export class CharacterSkillsComponent implements OnInit {
  @Input() player: Player;

  defaultSkills: Map<SkillsEnum, Skill>= Skills;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
  }

}
