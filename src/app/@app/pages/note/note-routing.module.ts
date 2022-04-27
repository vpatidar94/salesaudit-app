import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteEditV2Component } from './note-edit-v2.component';
import { NoteComponent } from './note.component';

const routes: Routes = [
  {
    path: '',
    component: NoteComponent
  },
  {
    path: 'edit',
    component: NoteEditV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteRoutingModule {}
