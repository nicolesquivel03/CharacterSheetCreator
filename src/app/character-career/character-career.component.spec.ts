import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCareerComponent } from './character-career.component';

describe('CharacterCareerComponent', () => {
  let component: CharacterCareerComponent;
  let fixture: ComponentFixture<CharacterCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
