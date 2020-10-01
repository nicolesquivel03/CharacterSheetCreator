import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player/player';
import { StatEnum } from './characteristics'

@Component({
  selector: 'app-character-characteristics',
  templateUrl: './character-characteristics.component.html',
  styleUrls: ['./character-characteristics.component.scss']
})
export class CharacterCharacteristicsComponent implements OnInit {
  @Input() player: Player;

  readonly thresholdLabel: string = 'Threshold';
  readonly currentLabel: string = 'Current';
  readonly rangeLabel: string = 'Range';
  readonly meleeLabel: string = 'Melee';


  constructor() { }

  ngOnInit(): void {
  }

}
