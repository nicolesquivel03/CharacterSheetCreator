import { Component, OnInit } from '@angular/core';
import { Career, CareerGroup } from '../character-description/career';
import { Archetype } from '../character-description/archetype';
import { basicArchetypeList } from '../character-description/archetypes';
import { basicCareerList, fantasyCareerList, scifiCareerList } from '../character-description/careers';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-character-description',
  templateUrl: './character-description.component.html',
  styleUrls: ['./character-description.component.scss']
})
export class CharacterDescriptionComponent implements OnInit {
  descriptionControl = new FormControl();

  readonly characterNameLabel: string = 'Character Name';
  readonly playerNameLabel: string = 'Player Name';
  
  readonly careerLabel: string = 'Select Career';
  careerGroup: CareerGroup[];
  
  readonly archetypeLabel: string = 'Select Archetype/Species';
  archetypeList: Archetype[] = [];
  
  constructor() { }
  

  ngOnInit(): void {
    this.setCareers();
    this.setArchetypes();
  }

  setCareers(): void {

    this.careerGroup = [
      {
        name: "Basic Careers",
        careers: basicCareerList
      }, 
      {
        name: "Fantasy Careers",
        careers: fantasyCareerList
      },
      {
        name: "Sci-Fi Careers", 
        careers: scifiCareerList
      }
    ]
  }

  setArchetypes(): void {
    this.archetypeList = this.archetypeList.concat(basicArchetypeList);
  }
}


