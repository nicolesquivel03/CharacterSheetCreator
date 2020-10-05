import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player/player';
import { Characteristics } from './characteristics';
import { Characteristic } from './characteristic';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-character-characteristics',
  templateUrl: './character-characteristics.component.html',
  styleUrls: ['./character-characteristics.component.scss']
})
export class CharacterCharacteristicsComponent implements OnInit {
  @Input() player: Player;

  defaultCharacteristics: Characteristic[] = Characteristics;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
  }

}
