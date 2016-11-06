import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WallComponent }  from './wall.component';
import {NoteComponent} from "./note/note.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
      WallComponent,
      NoteComponent
  ],
  bootstrap:    [ WallComponent ]
})
export class AppModule { }
