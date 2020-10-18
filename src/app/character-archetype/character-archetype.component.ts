import { Component, OnInit, Input } from '@angular/core';
import { Archetype, ArchetypeGroup } from '../character-archetype/archetype';
import { basicArchetypeList, ArchetypeEnum } from '../character-archetype/archetypes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';
import { identifierModuleUrl } from '@angular/compiler';
import { StatEnum } from '../character-stats/stats';

@Component({
  selector: 'app-character-archetype',
  templateUrl: './character-archetype.component.html',
  styleUrls: ['./character-archetype.component.scss']
})
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
    console.log(`Updating Archetype`);
    const selectedArchetype = basicArchetypeList.get(event.value);
    this.player.playerArchetype = selectedArchetype;
    this.updateCharacteristicsValues(selectedArchetype);
    this.UpdateStats();
    this.playerService.updatePlayer(this.player);
    console.log(`Archetype now: ${this.player.playerArchetype.display}`);
  }

  updateCharacteristicsValues(selectedArchetype: Archetype): void {
    selectedArchetype.startingCharacteristics.forEach((value: number, characteristic: CharacteristicEnum) => {
      this.player.playerCharacteristics.get(characteristic).value = value;
    });
  }







  //Updating Stats after selecting 
  UpdateStats(): void{
    this.CalculateSoak();
    this.CalculateWoundThreshold();
    this.CalculateStrainThreshold();
    this.CalculateRangedDefense();
    this.CalculateMeleeDefense();
    this.playerService.updatePlayer(this.player);
  }

  CalculateSoak(): void{
    this.player.playerStats.get(StatEnum.Soak).value1 = this.player.playerCharacteristics.get(CharacteristicEnum.Brawn).value; //Add possible modifiers such as armor and talents
  }

  CalculateWoundThreshold(): void{
    this.player.playerStats.get(StatEnum.Wounds).value1 = (this.player.playerArchetype.startingStats.get(StatEnum.Wounds) + this.player.playerCharacteristics.get(CharacteristicEnum.Brawn).value); //Add possible modifiers such as talents
  }

  CalculateStrainThreshold(): void{
    this.player.playerStats.get(StatEnum.Strain).value1 = (this.player.playerArchetype.startingStats.get(StatEnum.Strain) + this.player.playerCharacteristics.get(CharacteristicEnum.Willpower).value); //Add possible modifiers such as talents
  }

  CalculateRangedDefense(): void{
    this.player.playerStats.get(StatEnum.Defense).value1 = 0; //Add possible modifiers such as talents and armor
  }

  CalculateMeleeDefense(): void{
    this.player.playerStats.get(StatEnum.Defense).value2 = 0; //Add possible modifiers such as talents and armor
  }
}
