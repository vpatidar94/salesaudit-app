import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NoteComponent } from './note.component';
import { NoteRoutingModule } from './note-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NoteEditComponent } from './note-edit.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RemoteApiModule } from '../../service/remote/remote-api.module';
import { ChartsModule } from 'ng2-charts';
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { NoteEditV2Component } from './note-edit-v2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteRoutingModule,
    MatButtonModule,
    MatIconModule, 
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    FlexLayoutModule,
    ChartsModule,
    RemoteApiModule,
    MatCheckboxModule
  ],
  declarations: [NoteComponent, NoteEditComponent, NoteEditV2Component],
})
export class NoteModule { }
