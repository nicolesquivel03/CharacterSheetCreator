import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { Stats } from '../character-characteristics/characteristics';

@Component({
  selector: 'app-genesys-character-sheet',
  templateUrl: './genesys-character-sheet.component.html',
  styleUrls: ['./genesys-character-sheet.component.scss']
})
export class GenesysCharacterSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
