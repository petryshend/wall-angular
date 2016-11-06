import {Component, OnInit} from '@angular/core';
import {NoteService} from "./note/note.service";
import {Note} from "./note/note";

@Component({
    selector: 'wall',
    templateUrl: 'app/wall.component.html',
    providers: [NoteService]
})
export class WallComponent implements OnInit {
    notes: Note[];

    constructor(private noteService: NoteService) {}

    ngOnInit(): void {
        this.noteService.getNotes().then(notes => this.notes = notes);
    }
}
