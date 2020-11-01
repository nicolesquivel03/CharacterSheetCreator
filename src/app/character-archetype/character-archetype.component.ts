import { Component, OnInit, Input } from '@angular/core';
import { Archetype, ArchetypeGroup } from '../character-archetype/archetype';
import { basicArchetypeList, ArchetypeEnum, ArchetypeGroupList, ArchetypeGroupEnum } from '../character-archetype/archetypes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Player } from '../player/player';
import { CharacteristicEnum } from '../character-characteristics/characteristics';
import { SettingEnum } from '../game-configuration/settings';
import { PlayerService } from '../player/player.service';
import { identifierModuleUrl } from '@angular/compiler';
import { StatEnum } from '../character-stats/stats';
import { SkillList, SkillsEnum } from '../character-skills/skills';
import { playerSkillList } from '../player/player-skills';
import { statsList } from '../player/player-stats';
import { characteristicList } from '../player/player-characteristics'
import { basicCareerList } from '../character-career/careers';

@Component({
  selector: 'app-character-archetype',
  templateUrl: './character-archetype.component.html',
  styleUrls: ['./character-archetype.component.scss']
})
export class CharacterArchetypeComponent implements OnInit {
  player: Player;

  descriptionControl = new FormControl();
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeGroup: Map<ArchetypeGroupEnum, ArchetypeGroup>;
  myarchetype: Archetype;
  counter: 0;
  
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.player$.subscribe(player => this.player = player);
    this.setArchetypes();
  }

  setArchetypes(): void {
    this.archetypeGroup = ArchetypeGroupList;
  }

  onArchetypeSelection(event): void {
    this.voidExistingPlayer();
    const selectedArchetype = this.findArchetype(event.value);
    this.player.playerArchetype = selectedArchetype;
    this.updateCharacteristicsValues(selectedArchetype);
    this.updateStats();
    if(selectedArchetype.startingSkills != null) {
      selectedArchetype.startingSkills.forEach(Skill => {
        this.player.playerSkills.get(Skill).investedPointValue = 1;
      });
    }
    this.player.playerSkills.forEach((skillValue) => {
      this.intialUpdateSkillValues(skillValue.id);
    });
    this.playerService.updatePlayer(this.player);
    console.log(`Archetype now: ${this.player.playerArchetype.display}`);
  }

  findArchetype(chosenCareer: ArchetypeEnum): Archetype{
    ArchetypeGroupList.forEach(loopArchetypeGroup => {
      loopArchetypeGroup.archetypeList.forEach(loopArchetype => {
        if (loopArchetype.id == chosenCareer)
          {
            this.myarchetype = loopArchetype;
          }
      });
    });
    console.log(`Career is ${this.myarchetype.id}`);
    return this.myarchetype;
  }

  //-- Updates the Characteristic Values for intial archetype selection --//
  updateCharacteristicsValues(selectedArchetype: Archetype): void {
    selectedArchetype.startingCharacteristics.forEach((value: number, characteristic: CharacteristicEnum) => {
      this.player.playerCharacteristics.get(characteristic).value = value;
    });
  }

  //-- Updates the dice values of the skills for inital archetype selection --//
  
  intialUpdateSkillValues(selectedSkill: SkillsEnum): void{
    if(this.player.playerCharacteristics.get(this.player.playerSkills.get(selectedSkill).associatedCharacteristic).value >= this.player.playerSkills.get(selectedSkill).investedPointValue)
    {
      this.player.playerSkills.get(selectedSkill).greenDiceCount = this.player.playerCharacteristics.get(this.player.playerSkills.get(selectedSkill).associatedCharacteristic).value - this.player.playerSkills.get(selectedSkill).investedPointValue;
      this.player.playerSkills.get(selectedSkill).yellowDiceCount = this.player.playerCharacteristics.get(this.player.playerSkills.get(selectedSkill).associatedCharacteristic).value - this.player.playerSkills.get(selectedSkill).greenDiceCount;
    }
    else if(this.player.playerCharacteristics.get(this.player.playerSkills.get(selectedSkill).associatedCharacteristic).value < this.player.playerSkills.get(selectedSkill).investedPointValue)
    {
      this.player.playerSkills.get(selectedSkill).greenDiceCount = this.player.playerSkills.get(selectedSkill).investedPointValue - this.player.playerCharacteristics.get(this.player.playerSkills.get(selectedSkill).associatedCharacteristic).value;
      this.player.playerSkills.get(selectedSkill).yellowDiceCount = this.player.playerSkills.get(selectedSkill).investedPointValue - this.player.playerSkills.get(selectedSkill).greenDiceCount;
    }
  }
  




  //-- Updating Stats after selecting Archetype --//
  updateStats(): void{
    this.calculateSoak();
    this.calculateWoundThreshold();
    this.calculateStrainThreshold();
    this.calculateRangedDefense();
    this.calculateMeleeDefense();
    this.playerService.updatePlayer(this.player);
  }

  //-- Update all Stats (Start) --//
  calculateSoak(): void{
    this.player.playerStats.get(StatEnum.Soak).value1 = this.player.playerCharacteristics.get(CharacteristicEnum.Brawn).value; //Add possible modifiers such as armor and talents
  }

  calculateWoundThreshold(): void{
    this.player.playerStats.get(StatEnum.Wounds).value1 = (this.player.playerArchetype.startingStats.get(StatEnum.Wounds) + this.player.playerCharacteristics.get(CharacteristicEnum.Brawn).value); //Add possible modifiers such as talents
  }

  calculateStrainThreshold(): void{
    this.player.playerStats.get(StatEnum.Strain).value1 = (this.player.playerArchetype.startingStats.get(StatEnum.Strain) + this.player.playerCharacteristics.get(CharacteristicEnum.Willpower).value); //Add possible modifiers such as talents
  }

  calculateRangedDefense(): void{
    this.player.playerStats.get(StatEnum.Defense).value1 = 0; //Add possible modifiers such as talents and armor
  }

  calculateMeleeDefense(): void{
    this.player.playerStats.get(StatEnum.Defense).value2 = 0; //Add possible modifiers such as talents and armor
  }
  //-- Update all Stats (End) --//

  voidExistingPlayer(): void{
    this.player.playerArchetype = null;
    this.player.playerCareer = null;
    this.player.playerSkills = playerSkillList;
    this.player.playerCharacteristics = characteristicList;
    this.player.playerStats = statsList;
    this.player.setting = null;
    this.playerService.updatePlayer(this.player);
  }
}


