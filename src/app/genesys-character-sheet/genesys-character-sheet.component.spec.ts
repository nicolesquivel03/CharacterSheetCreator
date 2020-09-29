import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesysCharacterSheetComponent } from './genesys-character-sheet.component';

describe('GenesysCharacterSheetComponent', () => {
  let component: GenesysCharacterSheetComponent;
  let fixture: ComponentFixture<GenesysCharacterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenesysCharacterSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesysCharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
