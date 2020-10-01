import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';

import { CharacterDescriptionComponent } from './character-description/character-description.component';
import { GenesysCharacterSheetComponent } from './genesys-character-sheet/genesys-character-sheet.component';
import { CharacterCharacteristicsComponent } from './character-characteristics/character-characteristics.component';
import { GameConfigurationComponent } from './game-configuration/game-configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDescriptionComponent,
    GenesysCharacterSheetComponent,
    CharacterCharacteristicsComponent,
    GameConfigurationComponent
  ],
  imports: [
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
    MatGridListModule
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
