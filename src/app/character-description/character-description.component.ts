import { Component, OnInit } from '@angular/core';
import { Career } from '../character-description/career';
import { Archetype } from '../character-description/archetype';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {

  readonly characterNameLabel: string = 'Character Name';
  readonly playerNameLabel: string = 'Player Name';
  
  readonly careerLabel: string = 'Select Career';
  careerList: Career[] = [];
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeList: Archetype[] = [];
  
  constructor() { }
  

  ngOnInit(): void {
    this.setCareers();
    this.setArchetypes();
  }

  setCareers(): void {
    const basicCareerList = [
      { display: 'Entertainer', value: 'entertainer' },
      { display: 'Explorer', value: 'explorer'},
      { display:'Healer', value: 'healer'},
      { display:'Leader', value: 'leader'},
      { display:'Scoundrel', value: 'scoundrel'},
      { display:'Socialite', value: 'socialite'},
      { display:'Soldier', value: 'soldier'},
      { display:'Tradesperson', value: 'tradesperson'}
    ];
    const fantasyCareerList = [ 
      { display: 'Knight', value: 'knight' },
      { display: 'Priest', value: 'priest'},
      { display: 'Druid', value: 'druid' },
      { display: 'Wizard', value: 'wizard'}
    ];
    const scifiCareerList = [
      { display: 'Hacker', value: 'hacker'},
      { display: 'Fighter Pilot', value: 'fighterPilot'},
      { display: 'Mad Scientist', value: 'madScientist'},
      { display: 'Starship Captain', value: 'starshipCaptain'}
    ];

    this.careerList = this.careerList.concat(basicCareerList).concat(fantasyCareerList).concat(scifiCareerList);
  }

  setArchetypes(): void {
    const basicArchetypeList = [
      { display: 'Average Human', value: 'human' },
      { display: 'The Laborer', value: 'laborer' },
      { display: 'The Intellectual', value: 'intellectual' },
      { display: 'The Aristocrat', value: 'aristocrat' }
    ];

    this.archetypeList = this.archetypeList.concat(basicArchetypeList);
  }
}


