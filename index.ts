import { marbleLogTo } from './console-log';

// RxJS Imports
import { Scheduler } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

import { defer }    from 'rxjs/observable/defer';
import { interval } from 'rxjs/observable/interval';
import { timer }    from 'rxjs/observable/timer';
import { from } from 'rxjs/observable/from';
import { of }       from 'rxjs/observable/of';

import {
  switchMap, map, concat,
  startWith, filter, takeWhile, bufferCount,
  tap, concatMap, delay, debounceTime
} from 'rxjs/operators';

// ************************************
// Demo Code
// ************************************


const observer = marbleLogTo("root");
const myObs$ = Observable.create(observer => {
  observer.next(1);
  setTimeout(() => observer.next(2), 110);
  setTimeout(() => observer.next(3), 150);
  setTimeout(() => observer.next(4), 200);
  setTimeout(() => observer.next(5), 350);
});

from([1, 2, 3, 4, 5]).subscribe( observer );    // Original stream
myObs$
  .pipe(
    debounceTime(100)                           // Using debounceTime() Operator
  )
  .subscribe( observer );
