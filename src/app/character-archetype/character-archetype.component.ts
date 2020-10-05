import { Component, OnInit, Input } from '@angular/core';
import { Archetype, ArchetypeGroup } from '../character-archetype/archetype';
import { basicArchetypeList, ArchetypeEnum } from '../character-description/archetypes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';
import { identifierModuleUrl } from '@angular/compiler';
import { StatEnum } from '../character-stats/stats';

export class CharacterArchetypeComponent implements OnInit {
  player: Player;

  descriptionControl = new FormControl();
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeGroup: ArchetypeGroup[] = [];
  
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setArchetypes();
  }

  setArchetypes(): void {
    this.archetypeGroup = [
      {
        name: "Basic Archetypes",
        archetypes: basicArchetypeList
      }
    ] 
  }

  onArchetypeSelection(event): void {
    const selectedArchetype = basicArchetypeList.get(event.value);
    this.player.playerArchetype = selectedArchetype;
    this.updateCharacteristicsValues(selectedArchetype);
    this.playerService.updatePlayer(this.player);
  }

  updateCharacteristicsValues(selectedArchetype: Archetype): void {
    selectedArchetype.startingCharacteristics.forEach((value: number, characteristic: CharacteristicEnum) => {
      this.player.playerCharacteristics.get(characteristic).value = value;
    });
  }

  updateStatsValues(selectedArchetype: Archetype): void {
    selectedArchetype.startingStats.forEach((value: number, stat: StatEnum) => {
      this.player.playerStats.get(stat).value1 = value;
    });
  }

}
