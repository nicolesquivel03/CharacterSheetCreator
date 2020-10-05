/** 3RD PARTY IMPORTS **/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/** ANGULAR IMPORTS **/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** ANGULAR MATERIAL IMPORTS **/
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

/** APPLICATION IMPORTS **/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { GenesysCharacterSheetComponent } from './genesys-character-sheet/genesys-character-sheet.component';
import { CharacterCharacteristicsComponent } from './character-characteristics/character-characteristics.component';
import { GameConfigurationComponent } from './game-configuration/game-configuration.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { CharacterCareerComponent } from './character-career/character-career.component';
import { CharacterSkillsComponent } from './character-skills/character-skills.component';
import { CharacterArchetypeComponent } from './character-archetype/character-archetype.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDescriptionComponent,
    GenesysCharacterSheetComponent,
    CharacterCharacteristicsComponent,
    GameConfigurationComponent,
    CharacterStatsComponent,
    CharacterStatsComponent,
    CharacterCareerComponent,
    CharacterSkillsComponent,
    CharacterArchetypeComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
