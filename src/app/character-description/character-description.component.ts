import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {

  readonly characterNameLabel: string = 'Character Name';
  readonly playerNameLabel: string = 'Player Name';
  
  readonly careerLabel: string = 'Select Career';
  careerList: string[];
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeList: string[];
  
  constructor() { }
  

  ngOnInit(): void {
    this.setCareers();
    this.setArchetypes();
  }

  setCareers(): void {
    const basicCareerList = ['Entertainer','Explorer','Healer','Leader','Scoundrel','Socialite','Soldier','Tradesperson'];
    const fantasyCareerList = ['Knight','Priest','Druid','Wizard'];
    const scifiCareerList = ['Hacker','Fighter Pilot','Mad Scientist','Starship Captain'];

    this.careerList.concat(basicCareerList).concat(fantasyCareerList).concat(scifiCareerList);
  }

  setArchetypes(): void {
    const basicArchetypeList = ['Average Human','The Laborer','The Intellectual','The Aristocrat'];

    this.archetypeList.concat(basicArchetypeList);
  }
}


