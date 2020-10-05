import { Component, Input, OnInit } from "@angular/core";
import { Player } from "../player/player";
import { Stat } from "./stat";
import { StatEnum, Stats } from "./stats";
import { PlayerService } from "../player/player.service";
import { PlayerStat } from '../player/player-stats';
//statsList


@Component({
  selector: 'app-character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.scss']
})
export class CharacterStatsComponent implements OnInit {
  player: Player;

  defaultStats: Stat[] = Stats;

  readonly thresholdLabel: string = 'Threshold';
  readonly currentLabel: string = 'Current';
  readonly rangeLabel: string = 'Range';
  readonly meleeLabel: string = 'Melee';

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
  }

}