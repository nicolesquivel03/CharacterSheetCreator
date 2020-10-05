import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';
import { identifierModuleUrl } from '@angular/compiler';

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
  
  constructor(private playerService: PlayerService) { }
  

  ngOnInit(): void{
    this.playerService.player$.subscribe(player => this.player = player);
  }

/*
  onDescriptionUpdate(event): void {
    const selectedArchetype = basicArchetypeList.get(event.value);
    this.player.playerArchetype = selectedArchetype;
    this.updateDescriptions(selectedArchetype);
    this.playerService.updatePlayer(this.player);
  }

  updateDescriptions(pName: string, cName: string): void;

  
  */
}