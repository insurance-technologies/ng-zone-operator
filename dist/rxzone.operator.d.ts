import { Observable } from 'rxjs';
import { NgZone } from '@angular/core';
export declare const rxzone: (zone: NgZone) => (source: Observable<any>) => Observable<unknown>;
