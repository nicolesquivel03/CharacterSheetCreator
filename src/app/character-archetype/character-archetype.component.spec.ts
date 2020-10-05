import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterArchetypeComponent } from './character-archetype.component';

describe('CharacterArchetypeComponent', () => {
  let component: CharacterArchetypeComponent;
  let fixture: ComponentFixture<CharacterArchetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterArchetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterArchetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
