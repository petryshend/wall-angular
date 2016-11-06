import {Injectable} from "@angular/core";
import {NOTES} from './mock-notes';
import {Note} from "./note";

@Injectable()
export class NoteService {
    getNotes(): Promise<Note[]> {
        return Promise.resolve(NOTES);
    }
}