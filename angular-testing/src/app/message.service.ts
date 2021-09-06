import { Injectable } from '@angular/core';
import {
    AngularFireDatabase,
    AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor(private db: AngularFireDatabase) {}
    getContent(): Observable<any> {
        const ref = this.db.object('alerts/testAlert');
        return ref.valueChanges();
    }
}
