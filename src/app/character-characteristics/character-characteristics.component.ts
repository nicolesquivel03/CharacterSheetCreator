import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-characteristics',
  templateUrl: './character-characteristics.component.html',
  styleUrls: ['./character-characteristics.component.scss']
})
export class CharacterCharacteristicsComponent implements OnInit {

  readonly soakValueLabel: string = 'Soak Value';
  readonly woundsLabel: string = 'Wounds';
  readonly strainLabel: string = 'Strain';
  readonly defenseLabel: string = 'Defense';
  readonly thresholdLabel: string = 'Threshold';
  readonly currentLabel: string = 'Current';
  readonly rangeLabel: string = 'Ranged';
  readonly meleeLabel: string = 'Melee';

  readonly brawnLabel: string = 'Brawn';
  readonly agilityLabel: string = 'Agility';
  readonly intellectLabel: string = 'Intellect';
  readonly cunningLabel: string = 'Cunning';
  readonly willpowerLabel: string = 'Willpower';
  readonly presenceLabel: string = 'Presence';

  soakValueValue: number = 0;
  woundThresholdValue: number = 0;
  woundCurrentValue: number = 0;
  strainThresholdValue: number = 0;
  strainCurrentValue: number = 0;
  defenseRangeValue: number = 0;
  defenseMeleeValue: number = 0;

  brawnValue: number = 0;
  agilityValue: number = 0;
  intellectValue: number = 0;
  cunningValue: number = 0;
  willpowerValue: number = 0;
  presenceValue: number = 0;



  constructor() { }

  ngOnInit(): void {
  }

}
