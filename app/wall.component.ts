import { Component } from '@angular/core';
import {Note} from "./note/note";

const NOTES: Note[] =[
    { content: 'content 1' },
    { content: 'content 2' },
    { content: 'content 3' },
    { content: 'content 4' },
    { content: 'content 5' },
    { content: 'content 6' },
    { content: 'content 7' },
    { content: 'content 8' },
    { content: 'content 9' },
];

@Component({
    selector: 'wall',
    templateUrl: 'app/wall.component.html'
})
export class WallComponent {
    notes = NOTES;
}
