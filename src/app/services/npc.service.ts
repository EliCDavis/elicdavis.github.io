// Angular dependencies
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Rx dependencies
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

// User defined models
import { Dialogue } from '../models/dialogue';

@Injectable()
export class NPCService {

    private dialogue$: ReplaySubject<Dialogue>;

    constructor(private http: Http) {
        this.dialogue$ = new ReplaySubject<Dialogue>();
     }

    public getDialouge$(): ReplaySubject<Dialogue> {
        return this.dialogue$;
    }

    public giveDialouge$(dialogue: Dialogue): void {
        this.dialogue$.next(dialogue);
    }

}