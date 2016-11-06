import {Component, Input} from '@angular/core';
import {Note} from "./note";

@Component({
    selector: 'note',
    templateUrl: 'app/note/note.component.html'
})
export class NoteComponent {
    @Input()
    note: Note;
}