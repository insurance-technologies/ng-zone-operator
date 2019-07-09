import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';

export const rxzone =
    (zone: NgZone) =>
        (source: Observable<any>) =>
            new Observable(observer =>
                source.subscribe(nextValue => zone.run( () => observer.next(nextValue) ) ));

